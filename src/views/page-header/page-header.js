!function () {
    "use strict";

    PhotoMapper.Views.PageHeader = PhotoMapper.BaseView.extend({
        templateName: 'PageHeader',
        className:    'page-header',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.renderTemplate(this.options);
        },

        toggleBackButton: function () {
            this.$el.toggleClass('no-back-button');
        }
    });
}();
