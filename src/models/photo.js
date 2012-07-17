/**
 * Represents a single photo in PhotoMapper.
 */

!function () {
    "use strict";

    PhotoMapper.Models.Photo = PhotoMapper.BaseModel.extend({
        defaults: {
            uri: '',
            location: {
                lat: 0,
                lon: 0
            },
            created: new Date(),
            modified: new Date()
        },

        initialize: function () {
        }
    });
}();
