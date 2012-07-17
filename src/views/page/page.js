!function () {
    "use strict"; /*jshint newcap: false*/

    PhotoMapper.Views.Page = PhotoMapper.BaseView.extend({
        templateName: 'Page',
        className: 'page',

        initialize: function () {
            this.render();
        },

        render: function () {
            this.renderTemplate();

            this.header = new PhotoMapper.Views.PageHeader(this.options.header);
            //this.footer = new PhotoMapper.Views.PageFooter(this.options.footer);

            this.$('.header').append(this.header.el);
            //this.$('.footer').append(this.footer.el);

            this._iScroll = new iScroll(this.$('.body')[0]);
        },

        toggleHeader: function () {
            this.$el.toggleClass('no-header');
        },

        toggleFooter: function () {
            this.$el.toggleClass('no-footer');
        },

        togglePage: function () {
            this.$el.toggleClass('hidden');
        },

        refreshScroller: function () {
            var self = this;
            setTimeout(function () {
                self._iScroll.refresh();
            }, 0);
        }
    });
}();
