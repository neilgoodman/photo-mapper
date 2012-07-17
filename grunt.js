/*global module:false*/
module.exports = function (grunt) {
    
    // External tasks.
    grunt.loadNpmTasks('grunt-less');

    // Custom tasks.
    grunt.loadTasks('grunt-tasks');

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        meta: {
            banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' *\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>' +
            ' Licensed under the <%= pkg.licenses[0].type %> license.\n' +
            ' *\n' +
            ' * Date: <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
            ' */'
        },
        lint: {
            files: [
                'grunt-tasks/build.js',
                'grunt.js',
                'src/**/*.js'
            ]
        },
        concat: {
            dist_javascript: {
                src: [
                    '<banner:meta.banner>', 

                    'lib/zepto/*.js',
                    'lib/deferred/*.js',
                    'src/zepto-jquery-support.js',
                    'lib/underscore/*.js',
                    'lib/backbone/*.js',
                    'lib/iscroll/*.js',

                    // Order is important.
                    'lib/bootstrap/bootstrap-transition.js',
                    'lib/bootstrap/bootstrap-alert.js',
                    'lib/bootstrap/bootstrap-button.js',
                    'lib/bootstrap/bootstrap-carousel.js',
                    'lib/bootstrap/bootstrap-collapse.js',
                    'lib/bootstrap/bootstrap-dropdown.js',
                    'lib/bootstrap/bootstrap-modal.js',
                    'lib/bootstrap/bootstrap-scrollspy.js',
                    'lib/bootstrap/bootstrap-tab.js',
                    'lib/bootstrap/bootstrap-tooltip.js',
                    'lib/bootstrap/bootstrap-popover.js',
                    'lib/bootstrap/bootstrap-typehead.js',
                    
                    // Order is important.
                    'src/namespace.js',
                    'src/*/base-*.js',
                    'src/*/**/*.js',
                    'src/template-compiler.js',
                    'src/page-manager.js',
                    'src/application.js'
                ],
                dest: 'dist/app.js'
            },
            dist_less: {
                src: [
                    // TODO: Fork grunt-less and add the ability to
                    // specify import pathes. For now we are going to
                    // manually include bootstrap.
                    'stylesheets/bootstrap/reset.less',
                    'stylesheets/bootstrap/variables.less',
                    'stylesheets/bootstrap/mixins.less',
                    'stylesheets/bootstrap/scaffolding.less',
                    'stylesheets/bootstrap/grid.less',
                    'stylesheets/bootstrap/layouts.less',
                    'stylesheets/bootstrap/type.less',
                    'stylesheets/bootstrap/code.less',
                    'stylesheets/bootstrap/forms.less',
                    'stylesheets/bootstrap/tables.less',
                    'stylesheets/bootstrap/sprites.less',
                    'stylesheets/bootstrap/dropdowns.less',
                    'stylesheets/bootstrap/wells.less',
                    'stylesheets/bootstrap/component-animations.less',
                    'stylesheets/bootstrap/close.less',
                    'stylesheets/bootstrap/buttons.less',
                    'stylesheets/bootstrap/button-groups.less',
                    'stylesheets/bootstrap/alerts.less',
                    'stylesheets/bootstrap/navs.less',
                    'stylesheets/bootstrap/navbar.less',
                    'stylesheets/bootstrap/breadcrumbs.less',
                    'stylesheets/bootstrap/pagination.less',
                    'stylesheets/bootstrap/pager.less',
                    'stylesheets/bootstrap/modals.less',
                    'stylesheets/bootstrap/tooltip.less',
                    'stylesheets/bootstrap/popovers.less',
                    'stylesheets/bootstrap/thumbnails.less',
                    'stylesheets/bootstrap/labels-badges.less',
                    'stylesheets/bootstrap/progress-bars.less',
                    'stylesheets/bootstrap/accordion.less',
                    'stylesheets/bootstrap/carousel.less',
                    'stylesheets/bootstrap/hero-unit.less',
                    'stylesheets/bootstrap/utilities.less',
                    'stylesheets/bootstrap/responsive-utilities.less',
                    'stylesheets/bootstrap/responsive-767px-max.less',
                    'stylesheets/bootstrap/responsive-navbar.less',

                    'stylesheets/application.less',
                    
                    'src/**/*.less'
                ],
                dest: 'dist/styles.less'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist_javascript.dest>'],
                dest: 'dist/app.min.js'
            }
        },
        less: {
            dist: {
                src: 'dist/styles.less',
                dest: 'dist/styles.css'
            }
        },
        copy: {
            dist: {
                src: [
                    'lib/cordova/cordova-1.8.1-android.js',
                    'lib/cordova/cordova-1.8.1-ios.js',
                    'images/*',

                    // This will get processed as an underscore template
                    // with grunt in its scope. This feature is a hack
                    // in the jQuery UI grunt copy extension. Would be
                    // nicer to use <file_template:> directive, but this
                    // isn't possible with grunt.file.copy().
                    'index.html'
                ],
                strip: 'lib/cordova',
                dest: 'dist'
            },
            dist_android: {
                src: [
                    'dist/cordova-1.8.1-android.js',
                    'dist/images/*',
                    'dist/app.js',
                    'dist/app.min.js',
                    'dist/styles.css',
                    'dist/index.html'
                ],
                renames: {
                    'android/assets/www/cordova-1.8.1-android.js': 'cordova.js'
                },
                strip: 'dist/',
                dest: 'android/assets/www'
            },
            dist_ios: {
                src: [
                    'dist/cordova-1.8.1-ios.js',
                    'dist/images/*',
                    'dist/app.js',
                    'dist/app.min.js',
                    'dist/styles.css',
                    'dist/index.html',
                    'dist/templates.html'
                ],
                renames: {
                    'ios/www/cordova-1.8.1-ios.js': 'cordova.js'
                },
                strip: 'dist/',
                dest: 'ios/www'
            }
        },
        watch: {
            files: [
                '<config:lint.files>', 
                '<config:concat.dist_less.src>', 
                'src/views/**/*.html', 
                'index.html'
            ],
            tasks: 'default'
        },
        jshint: {
            options: {
                curly: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                expr: true
            },
            globals: {
                jQuery: true,
                Zepto: true,
                Backbone: true,
                _: true,
                $: true,
                iScroll: true,
                Deferred: true,
                module: true,
                console: true,
                require: true,
                PhotoMapper: true
            }
        },
        uglify: {}
    });

    // Default task.
    grunt.registerTask('default', 'clean lint concat:dist_javascript concat:dist_less min less copy:dist copy:dist_android copy:dist_ios');

};
