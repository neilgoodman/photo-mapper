!function () {

    PhotoMapper.Transitions.SlideLeft = PhotoMapper.BaseTransition.extend({
        _doAnimation: function () {
            var self        = this,
                windowWidth = $(window).width() + 'px',
                doubleWidth = ($(window).width() * 2) + 'px',
                promise     = null;

            this._prepElements();

            // Initialize all the elements in the animation before it
            // takes place.
            this._inPage
                .$el
                .css({
                    left: windowWidth,
                    right: 'auto',
                    width: windowWidth
                });

            this._outPage
                .$el
                .css({
                    right: 'auto',
                    width: windowWidth
                });

            this._$container
                .css({
                    right: 'auto',
                    width: doubleWidth
                });

            // We can get away with using animate here because Zepto does
            // all of its animatations using CSS3 transitions.
            this._$container
                .animate({
                    translate3d: '-' + windowWidth + ',0,0'
                },
                {
                    complete: function () {
                        self._promise.resolve();
                    }
                });

            this._promise.done(function () {
                self._cleanElements();
            });

            return this._promise;
        }
    });

}();