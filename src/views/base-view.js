!function () {
    "use strict";

    PhotoMapper.BaseView = Backbone.View.extend({

        renderTemplate: function (templateData) {
            if (this.templateName && PhotoMapper.Templates[this.templateName]) {
                templateData = templateData || {};

                this.$el.html(PhotoMapper.Templates[this.templateName](templateData));
            }
        },

        render: function () {
            this.renderTemplate();

            return this;
        }
    });
}();
