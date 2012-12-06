define(
    [
        'FixParser'
    ],
    function(FixParser)
    {
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
            resultTemplate = Handlebars.compile(resultTemplateText);

        var input = $('#fix-message-input');

        var parseText = function()
        {
            var messageText = input.val(),
                messages = parser.parse(messageText);

            $('#fix-message-output-container').html(resultTemplate(messages));
        };

        input.bind('input propertychange', parseText);

        parseText();

        // Support the 'show data type' option
        var dataTypeCssRule = getCSSRule('td.data-type');
        $('#show-data-type').change(function()
        {
            var checked = $(this).is(':checked');
            dataTypeCssRule.style.display = checked ? 'inherit' : 'none';
        })
    }
);