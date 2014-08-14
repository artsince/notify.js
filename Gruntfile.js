module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!<%= pkg.name %> v.<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true
            },
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                unused: true,
                forin: true,
                curly: true,
                eqeqeq: true,
                indent: 4,
                plusplus: true,
                undef: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                node: true
            },
            uses_defaults: ['Gruntfile.js', 'app.js'],
            with_overrides: {
                options: {
                    browser: true,
                    node: false
                },
                files: {
                    src: ['<%= pkg.name %>.js', 'public/js/*.js']
                },
                ignores: ['public/js/<%= pkg.name %>.min.js']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= pkg.name %>.css': '<%= pkg.name %>.scss'
                }
            }
        },
        copy: {
            js: {
                expand: true,
                src: '<%= pkg.name %>.js',
                dest: 'public/js/'
            },
            css: {
                expand: true,
                src: '<%= pkg.name %>.css',
                dest: 'public/css/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['jshint', 'sass', 'copy']);
};