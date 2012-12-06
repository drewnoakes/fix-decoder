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
        });

        var decodeHash = function()
        {
            if (document.location.hash.length > 1)
                return Base64.decode(document.location.hash.substr("#base64:".length));
            return null;
        };

        var parseText = function(messageText)
        {
            var messages = parser.parse(messageText);
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

        window.onpopstate = function(event)
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
    }
);