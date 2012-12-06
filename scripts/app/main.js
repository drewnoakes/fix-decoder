define(
    [
        'FixParser'
    ],
    function(FixParser)
    {
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
    }
);