define(
    [
        'FixParser',
        'Base64'
    ],
    function(FixParser, Base64)
    {
        var MAX_HASH_LENGTH = 1024 * 10;

        var getCSSRule = function(ruleName, deleteFlag)
        {
            ruleName = ruleName.toLowerCase();
            deleteFlag = deleteFlag || false;
            if (document.styleSheets) {
                for (var i = 0; i < document.styleSheets.length; i++) {
                    var styleSheet = document.styleSheets[i];
                    var ii = 0;
                    var cssRule = false;
                    do {
                        if (styleSheet.cssRules) {
                            cssRule = styleSheet.cssRules[ii];
                        } else {
                            cssRule = styleSheet.rules[ii];
                        }
                        if (cssRule) {
                            if (cssRule.selectorText.toLowerCase() == ruleName) {
                                if (deleteFlag == 'delete') {
                                    if (styleSheet.cssRules) {
                                        styleSheet.deleteRule(ii);
                                    } else {
                                        styleSheet.removeRule(ii);
                                    }
                                    return true;
                                } else {
                                    return cssRule;
                                }
                            }
                        }
                        ii++;
                    } while (cssRule);
                }
            }
            return false;
        };

        var parser = new FixParser(),
            resultTemplateText = $('#result-template').html(),
            resultTemplate = Handlebars.compile(resultTemplateText),
            input = $('#fix-message-input');

        // Listen for changes in the textbox
        input.bind('input propertychange', function()
        {
            var messageText = input.val();
            parseText(messageText);
            var encoded = Base64.encode(messageText);
            if (encoded) {
                var hash = 'base64:' + encoded;
                window.location.hash = hash.length < MAX_HASH_LENGTH ? hash : null;
            } else {
                window.location.hash = '';
            }
            updateElementVisibilityStates();
        });

        var updateElementVisibilityStates = function()
        {
            var messageText = input.val();
            if (messageText) {
                $('#about').hide();
                $('#clear').show();
                $('#options').show();
            } else {
                $('#about').show();
                $('#clear').hide();
                $('#options').hide();
            }
        };

        var decodeHash = function()
        {
            if (document.location.hash.length > 1)
                return Base64.decode(document.location.hash.substr("#base64:".length));
            return null;
        };

        var parseText = function(messageText)
        {
            var messages = parser.parse(messageText),
                compIds = {};

            // Go through messages and track the sender/targets.
            _.each(messages, function(msg)
            {
                compIds[msg.senderCompId] = true;
                compIds[msg.targetCompId] = true;
            });

            if (_.keys(compIds).length === 2)
            {
                // If this exchange is between exactly two parties, then set them to left/right
                var leftCompId = messages[0].senderCompId;
                _.each(messages, function(msg)
                {
                    msg.side = msg.senderCompId === leftCompId ? 'left' : 'right';
                });
            }
            var resultsHtml = resultTemplate(messages);
            $('#fix-message-output-container').html(resultsHtml);
        };

        var decoded = decodeHash();
        if (decoded) {
            parseText(decoded);
            input.val(decoded);
        } else {
            parseText(input.val());
        }
        updateElementVisibilityStates();

        window.onpopstate = function()
        {
            var messageText = decodeHash();
            parseText(messageText);
            input.val(messageText);
        };

        // Support the 'show data type' option
        var dataTypeCssRule = getCSSRule('td.data-type');
        $('#show-data-type').change(function()
        {
            var checked = $(this).is(':checked');
            dataTypeCssRule.style.display = checked ? 'table-cell' : 'none';
        });

        // Support basic links at the bottom
        $('#clear').click(function() { input.val(''); return false; });

        var sampleMessages = [
            'outgoing: 8=FIX.4.2|9=179|35=AE|56=LSEHub|49=BROKERX|128=LSETR|34=2175|52=20120126-15:15:54|918=GBP|31=89.0000000|64=20120126|828=1|60=20120126-13:32:49|32=6|22=4|571=124|43=N|570=N|150=0|48=GB0007188757|10=017|\n' +
            'incoming: 8=FIX.4.2|9=113|35=AR|49=LSEHub|56=BROKERX|115=LSETR|34=2006|52=20120126-15:15:54|370=20120126-15:15:54.822|571=124|150=0|939=0|10=126|',
            'outgoing: 8=FIX.4.2|9=127|35=AE|49=LSEHub|56=LSETR|115=BROKERX|34=2287|43=N|52=20120330-12:14:09|370=20120330-12:14:09.816|571=00008661533TRLO1-1-1-0|150=H|10=113|\n' +
            'incoming: 8=FIX.4.2|9=106|35=AR|34=2486|49=LSETR|52=20120330-12:14:10.379|56=LSEHub|128=BROKERX|150=H|571=00008661533TRLO1-1-1-0|939=0|10=103',
            'outgoing: 8=FIX.4.2|9=175|35=AE|49=BROKERX|56=LSEHub|34=17|52=20120202-16:04:44|128=LSETR|918=EUR|31=89.0000000|64=20120202|828=1007|60=20120202-16:04:44|32=6|22=4|571=1698|570=N|150=0|48=AT0000785555|10=087|\n' +
            'incoming: 8=FIX.4.2|9=111|35=AR|49=LSEHub|56=BROKERX|115=LSETR|34=16|52=20120202-16:04:44|370=20120202-16:04:45.257|571=1698|150=0|939=0|10=026|'
        ];

        $('a.sample-message-link').click(function()
        {
            var index = $(this).data('index');
            var message = sampleMessages[index];
            input.val(message);
            input.trigger('input');
            return false;
        });
    }
);