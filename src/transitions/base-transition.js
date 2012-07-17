!function () {
    "use strict";

    PhotoMapper.BaseTransition = function ($container) {
        this._$container = $container || $('body');
        this._inPage     = null;
        this._outPage    = null;
        this._promise    = new $.Deferred();
    };

    _.extend(PhotoMapper.BaseTransition.prototype, Backbone.Events, {
        set: function (key, view) {
            if (!view) {
                console.log('Transition: View was null for \'' + key + '\' on set().');
                return;
            }

            switch (key) {
                case 'inPage':
                case 'outPage':
                    this['_' + key] = view;
                    break;

                default:
                    console.log('Transition: The key \'' + key + '\' was invalid for set().');
                    break;
            }
        },

        animate: function () {
            if (!this._inPage || !this._outPage) {
                throw 'Transition: activePage and newPage were not set before the call to animate().';
            }

            return this._doAnimation();
        },

        // Stub method that will always return a resolved promise.
        // Super-classes need to override this.
        _doAnimation: function () {
            this._promise.resolve();
            
            return this._promise;
        },

        _prepElements: function () {
            this._inPage
                .$el
                .removeClass('hidden');
        },

        _cleanElements: function () {
            this._$container
                .attr('style', '');

            this._inPage
                .$el
                .attr('style', '');

            this._outPage
                .$el
                .attr('style', '')
                .addClass('hidden');
        }
    });

    PhotoMapper.BaseTransition.extend = Backbone.Model.extend;
}();
