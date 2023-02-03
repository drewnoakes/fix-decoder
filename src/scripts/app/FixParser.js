define(
    [
        'data'
    ],
    function(data)
    {
        var FIELD_CHECKSUM = 10,
            BEGIN_STRING = 8,
            BODY_LENGTH = 9,
            MSG_TYPE = 35,
            SENDER_COMP_ID = 49,
            TARGET_COMP_ID = 56;

        var FixParser = function()
        {};

        var parseVersionFromBeginString = function(beginStr) {
            return parseFloat(beginStr.substr("FIX.".length));
        };

        var splitFields = function(str) {
            var result = str.match(/[^0-9a-zA-Z:\s]*8=FIX(?:[^=]{0,20}?)\D9=\d+(?<delim>.*?\D)35=/);
            if (result !== null) {
                return str.split(result.groups.delim);
            } else
            {
                return str.split(/\||;|\x001|\[SOH\]|<SOH>|\^A/);
            }
        };

        FixParser.prototype.parse = function(str)
        {
            // Create a sequence of fields
            var regex = /([0-9]+)=(.*)/,
                fields = [], result;

            var fixVersion = 'unknown';

            var splits = splitFields(str);
            for (var i=0; i<splits.length; ++i) {
                // cut the fields by separators before extracting field id and value
                result = splits[i].match(regex);
                if (!result)
                    continue;

                var fieldId = parseInt(result[1]),
                    value = result[2],
                    field = data.fieldById[fieldId],
                    decodedValue = field && field.values ? field.values[value] : null;

                if (fieldId === BEGIN_STRING) {
                    fixVersion = parseVersionFromBeginString(value);
                }

                var classes = [];

                if (_.includes(data.systemFieldIds, fieldId)) {
                    classes.push("system-field");
                }

                if (field) {
                    if (field.isRequired) {
                        classes.push("required-field");
                    }
                    if (field.deprecatedSince <= fixVersion) {
                        classes.push("deprecated-field");
                    }
                    if (field.isHeaderField) {
                        classes.push("header-field");
                    }
                }

                fields.push({
                    fieldId: fieldId,
                    value: value,
                    field: field,
                    raw: fieldId + "=" + value + "\01",
                    decodedValue: decodedValue,
                    classes: classes.join(' ')
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
                            message.fixVersion = field.value.replace("FIX.", "");
                            break;
                        case MSG_TYPE:
                            if (!hasActiveMessage) {
                                createMessage();
                            }
                            message.type = field.decodedValue || 'Unknown Message Type';
                            break;
                        case SENDER_COMP_ID:
                            message.senderCompId = field.value;
                            break;
                        case TARGET_COMP_ID:
                            message.targetCompId = field.value;
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

            // BodyLength(9) verification
            _.each(
                messages,
                function(message)
                {
                    var field_bodylength = undefined;
                    length = 0;

                    _.each(
                        message.fields,
                        function(field)
                        {
                            if ( field.fieldId == BODY_LENGTH ) {
                                field_bodylength = field;
                                return;
                            }

                            // Some fields are not part of the FIX message body, skip them
                            if ( field.fieldId == BEGIN_STRING || field.fieldId == FIELD_CHECKSUM ) {
                                return;
                            }

                            length += field.raw.length;
                        }
                    );

                    if ( ! field_bodylength ) {
                        return;
                    }

                    if ( field_bodylength.value == length ) {
                        field_bodylength.classes += ' valid';
                        field_bodylength.decodedValue = 'Valid';
                    }
                    else {
                        field_bodylength.classes += ' invalid';
                        field_bodylength.decodedValue = '/!\\ Invalid (expected ' + length + ')';
                    }
                }
            );

            // Checksum(10) verification
            _.each(
                messages,
                function(message)
                {
                    var field_checksum = undefined;
                    sum = 0;

                    _.each(
                        message.fields,
                        function(field)
                        {
                            if ( field.fieldId == FIELD_CHECKSUM ) {
                                field_checksum = field;
                                return;
                            }

                            for ( var i = 0 ; i < field.raw.length ; i++ ) {
                                sum += field.raw.charCodeAt(i);
                            }
                        }
                    );

                    // Modulo 256 + pad up to 3 characters with zero
                    sum = ("00" + (sum % 256)).slice(-3);

                    if ( ! field_checksum ) {
                        return;
                    }

                    if ( field_checksum.value == sum ) {
                        field_checksum.classes += ' valid';
                        field_checksum.decodedValue = 'Valid';
                    }
                    else {
                        field_checksum.classes += ' invalid';
                        field_checksum.decodedValue = '/!\\ Invalid (expected ' + sum + ')';
                    }
                }
            );

            return messages;
        };

        return FixParser;
    }
);
