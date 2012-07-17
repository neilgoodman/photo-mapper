/**
 * Grabs all underscore templates from the DOM and compiles them.
 *
 * This is a little inefficient for mobile. You can replace underscore templates
 * with something like Twitter's Hogan, which you can pre-compile during your build
 * phase. This will work well enough for my tutorial though.
 */

$(function () {
    "use strict";
    
    $('script[type="text\/x-underscore-template"]').each(function () {
        var $template    = $(this),
            templateName = $template.attr('data-template-name'),
            template     = $template.html();

        if (templateName && template) {
            PhotoMapper.Templates[templateName] = _.template(template);
        }
    });
});
