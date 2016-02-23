module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: [
        'app/**/*.js',
        // 'tests/app/**/*.js',
        // 'tests/runner.js',
        'Gruntfile.js',
        '!app/bestPractices.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jslint: {
      all: {
        src: [
          'app/**/*.js',
          // 'tests/app/**/*.js',
          // 'tests/runner.js',
          '!app/bestPractices.js'
        ],
        directives: {
          browser: true,
          devel: true,
          node: true,
          white: true,
          predef: ['define']
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/**/*.js', 'tests/app/**/*.js'],
        tasks: ['jshint', 'jslint'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 4444,
        base: {
          path: __dirname,
          options: {
            index: 'tests/runner.html',
            keepalive: true
          }
        }
      }
    }
  }
  });

  grunt.registerTask('default', [ 'jshint' ]);
  grunt.registerTask('develop', [ 'connect', 'watch' ]);
};
