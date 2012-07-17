!function () {
    "use strict";

    // This makes Twitter Bootstrap use Zepto and fills in
    // the support property so Bootstrap doesn't blow up.
    window.jQuery        = window.Zepto;
    window.Zepto.support = window.Zepto.support || {};

    if (!Zepto.Deferred) {
        // Patch in $.Deferred support into Zepto using Simply-Deferred.
        Deferred.installInto(Zepto);
    }
    
}();