module.exports = function (grunt) {

    /**
     * time-grunt
     *
     * Display the elapsed execution time of grunt tasks
     *
     * @link https://www.npmjs.com/package/time-grunt
     */
    require('time-grunt')(grunt);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /**
         * grunt-contrib-sass
         *
         * Compile Sass to CSS
         *
         * @link https://www.npmjs.com/package/grunt-contrib-sass
         */
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'style.css': 'style.scss'
                }
            }
        },
        /**
         * grunt-contrib-watch
         *
         * Run predefined tasks whenever watched file patterns are
         * added, changed or deleted.
         *
         * @link https://www.npmjs.com/package/grunt-contrib-watch
         */
        watch: {
            styles: {
                files: ['*.scss'],
                tasks: ['css']
            }
        },
        /**
         * grunt-version-check
         *
         * Checks if your NPM or Bower dependencies are out of date.
         *
         * Run grunt versioncheck
         *
         * @link https://www.npmjs.com/package/grunt-version-check
         */
        versioncheck: {
            options: {
                skip: ['semver', 'npm', 'lodash'],
                hideUpToDate: false
            }
        },
        /**
         * grunt-notify
         *
         * Automatic desktop notifications for Grunt errors and warnings using
         * Growl for OS X or Windows, Mountain Lion and Mavericks Notification
         * Center, and Notify-Send.
         *
         * @link https://www.npmjs.com/package/grunt-notify
         */
        notify: {
            css: {
                options: {
                    title: 'Grunt, grunt!',
                    message: 'CSS is compiled.'
                }
            },
            default: {
                options: {
                    title: 'Grunt, grunt!',
                    message: 'All tasks have completed with no errors.'
                }
            }
        }
    });
    /**
     * load-grunt-tasks
     *
     * Load multiple grunt tasks using globbing patterns
     *
     * This module will read the dependencies/devDependencies/peerDependencies
     * in your package.json and load grunt tasks that match the provided patterns.
     *
     * @link https://www.npmjs.com/package/load-grunt-tasks
     */
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('css', ['sass', 'notify:css']);

    grunt.registerTask('default', ['css', 'notify:default']);

    grunt.util.linefeed = '\n';
};
