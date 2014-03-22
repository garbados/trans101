var config = require('./config');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['src/js/*.js'],
      options: {
        browser: true
      }
    },
    bower: {
      app: {
        // it just works :D
      }
    },
    yaml: {
      app: {
        files: [{
          expand: true,
          src: ['*.yml'],
          cwd: 'docs/',
          dest: 'dist/docs/'
        }]
      }
    },
    concat: {
      vendor: {
        src: [
          'lib/jquery/*.js',
          'lib/jquery-ui/*.js',
          'lib/jquery.tocify.js/*.js',
          'lib/handlebars/*.js'
        ],
        dest: 'dist/js/vendor.js'
      },
      bundle: {
        src: [
          'src/js/app.js'
        ],
        dest: 'dist/js/bundle.js'
      }
    },
    copy: {
      app: {
        files: [
          {
            expand: true,
            src: ['*.html'],
            cwd: 'src/html/',
            dest: 'dist'
          }
        ]
      }
    },
    handlebars: {
      app: {
        options: {
          namespace: 'JST',
        },
        files: {
          'dist/js/templates.js': ['templates/*.hbs']
        }
      }
    },
    mkcouchdb: {
      app: {
        db: config.deploy_to,
        options: {
          okay_if_exists: true
        }
      }
    },
    couchapp: {
      app: {
        app: 'couchapp',
        db: config.deploy_to,
        options: {
          okay_if_exists: true
        }
      }
    },
    connect: {
      app: {
        options: {
          base: 'dist',
          port: 5000,
          hostname: '127.0.0.1'
        }
      }
    },
    watch: {
      options: {
        livereload: 5000
      },
      scripts: {
        files: ['src/**/*'],
        tasks: ['jshint', 'concat', 'copy'] 
      },
      docs: {
        files: ['docs/*'],
        tasks: ['yaml', 'handlebars']
      },
      templates: {
        files: ['templates/*'],
        tasks: ['handlebars']
      }
    }
  });

  require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

  grunt.registerTask('build', [
    'jshint',
    'yaml',
    'bower',
    'handlebars',
    'concat',
    'copy'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'mkcouchdb',
    'couchapp'
  ]);

  grunt.registerTask('serve', [
    'build',
    'connect',
    'watch'
  ]);
};