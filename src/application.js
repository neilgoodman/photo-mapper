$(function () {
    "use strict";

    PhotoMapper.PageManager.set('test1', new PhotoMapper.Views.Page({
        header: {
            title: 'Test 1'
        }
    }));

    PhotoMapper.PageManager.set('test2', new PhotoMapper.Views.Page({
        header: {
            title: 'Test 2'
        }
    }));

    PhotoMapper.PageManager.makeActive('test1');

    setTimeout(function () {
        PhotoMapper.PageManager.makeActive('test2', PhotoMapper.Transitions.SlideLeft);
    }, 500);

    PhotoMapper.PageManager.on('makeActiveComplete', function (key) {
        if (key == 'test2') {
            setTimeout(function () {
                PhotoMapper.PageManager.makeActive('test1', PhotoMapper.Transitions.SlideRight);
            }, 1000);
        }
    });
});
