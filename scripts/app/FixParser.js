define(
    [
        'data'
    ],
    function(data)
    {
        var FIELD_CHECKSUM = 10,
            BEGIN_STRING = 8,
            MSG_TYPE = 35;

        var systemFieldIds = [8, 9, 10, 35, 34, 49, 52, 56];

        var FixParser = function()
        {};

        FixParser.prototype.parse = function(str)
        {
            // Create a sequence of fields
            var regex = /([0-9]+)=([^|\001]*)/g,
                fields = [], result;

            while (result = regex.exec(str)) {
                var fieldId = parseInt(result[1]),
                    value = result[2],
                    field = data.fieldById[fieldId],
                    decodedValue = field && field.values ? field.values[value] : null;

                fields.push({
                    fieldId:fieldId,
                    value:value,
                    field:field,
                    decodedValue:decodedValue,
                    isSystemField:_.contains(systemFieldIds, fieldId)
                });
            }

            // Divide the sequence up into one or more messages
            var message = undefined,
                messages = [],
                hasActiveMessage = false;

            var createMessage = function()
            {
                message = {fields:[]};
                messages.push(message);
                hasActiveMessage = true;
            };

            _.each(
                fields,
                function(field)
                {
                    var processed = false;

                    switch (field.fieldId) {
                        case FIELD_CHECKSUM:
                            if (hasActiveMessage) {
                                message.fields.push(field);
                                hasActiveMessage = false;
                                message = undefined;
                                processed = true;
                            }
                            break;
                        case BEGIN_STRING:
                            createMessage();
                            break;
                        case MSG_TYPE:
                            if (!hasActiveMessage) {
                                createMessage();
                            }
                            message.type = field.decodedValue || 'Unknown Message Type';
                            break;
                    }

                    if (!processed) {
                        if (!hasActiveMessage) {
                            createMessage();
                        }

                        message.fields.push(field);
                    }
                }
            );

            return messages;
        };

        return FixParser;
    }
);