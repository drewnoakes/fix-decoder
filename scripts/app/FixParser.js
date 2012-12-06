define(
    [
        'data'
    ],
    function(data)
    {
        var FIELD_CHECKSUM = 10,
            BEGIN_STRING = 8;

        var FixParser = function()
        {

        };

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
                    decodedValue:decodedValue
                });
            }

            // Divide the sequence up into one or more messages
            var message = undefined,
                messages = [],
                hasActiveMessage = false;

            _.each(
                fields,
                function(field)
                {
                    var processed = false;

                    switch (field.fieldId) {
                        case FIELD_CHECKSUM:
                            if (hasActiveMessage) {
                                message.push(field);
                                hasActiveMessage = false;
                                message = undefined;
                                processed = true;
                            }
                            break;
                        case BEGIN_STRING:
                            message = [];
                            messages.push(message);
                            hasActiveMessage = true;
                            break;
                    }

                    if (!processed) {
                        if (!hasActiveMessage) {
                            message = [];
                            messages.push(message);
                            hasActiveMessage = true;
                        }

                        message.push(field);
                    }
                }
            );

            return messages;
        };

        return FixParser;
    }
);