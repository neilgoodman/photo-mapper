!function () {
    "use strict"; /*jshint newcap: false*/

    PhotoMapper.PageManager = {
        _active: null,
        _pages: {},
        _state: 'idle',

        set: function (key, view) {
            if (!(view instanceof PhotoMapper.Views.Page)) {
                console.log('PageManager: View given was not a page.');
                return;
            }

            if (this._pages[key]) {
                this.remove(key);
            }

            this._pages[key] = view;

            if (!view.$el.is('.hidden')) {
                view.$el.addClass('hidden');
            }

            // We undelegateEvents because the page is hidden and won't receive events.
            view.undelegateEvents();
            $('.app-container').append(view.el);
        },

        remove: function (key) {
            if (this._pages[key]) {
                this._pages[key].remove();
                delete this._pages[key];
            }
        },

        get: function (key) {
            return this._pages[key];
        },

        makeActive: function (key, transition) {
            if (!this._pages[key]) {
                console.log('PageManager: The given page \'' + key + '\' doesn\'t exist.');
                return;
            }

            if (this._state != 'idle') {
                console.log('PageManger: Pages are current transitioning, so makeActive() failed.');
                return;
            }

            if (this._pages[key] == this._active) {
                console.log('PageManager: \'' + key + '\' is already active.');
                return;
            }

            var self = this,
                page = this._pages[key];

            this._state = 'animating';

            if (transition && typeof transition == 'function' && this._active) {
                var trans = new transition($('.app-container'));
                
                trans.set('outPage', this._active);
                trans.set('inPage', page);
                
                trans
                    .animate()
                    .done(function () {
                        self._active.undelegateEvents();
                        self._active = page;
                        self._active.delegateEvents();

                        self._state  = 'idle';
                        self.trigger('makeActiveComplete', key);
                    });
            }
            else {
                if (this._active) {
                    this._active.undelegateEvents();
                    this._active
                        .$el
                        .addClass('hidden');
                }

                page.$el
                    .removeClass('hidden');

                this._active = page;
                this._active.delegateEvents();

                setTimeout(function () {
                    self._state = 'idle';
                    self.trigger('makeActiveComplete', key);
                }, 0);
            }
        }
    };

    // Apply event mixin.
    _.extend(PhotoMapper.PageManager, Backbone.Events);

}();
