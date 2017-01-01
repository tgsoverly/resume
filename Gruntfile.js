module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      build: ["tmp", "dist"]
    },
    sass: {
      dist: {
        files: {
          'dist/assets/style.css': 'templates/html/assets/style.scss'
        },
        options: {
          loadPath: ['node_modules/foundation-sites/scss', 'templates/html/assets']
        }
      }
    },
    assemble: {
      options: {
        flatten: true,
        data: ['data/*.{json,yml}']
        },
      html: {
        options: {
          helpers: ['templates/html/helpers/*'],
          partials: ['templates/html/partials/**/*.hbs'],
          layout: 'templates/html/layouts/layout.hbs'
        },
        src: ['templates/html/*.hbs'],
        dest: 'dist/'
      },
      tex: {
        options: {
          helpers: ['templates/tex/helpers/*'],
          partials: ['templates/tex/partials/**/*.hbs'],
        },
        src: ['templates/tex/*.hbs'],
        dest: 'tmp/'
      }
    },
    copy: {
      main: {
        files: [

          // makes all src relative to cwd
          {
            expand: true,
            cwd: 'templates/tex/',
            src: ['bib/**'],
            dest: 'tmp/'
          }, {
            expand: true,
            cwd: 'templates/tex/',
            src: ['garamond/**'],
            dest: 'tmp/'
          }, {
            expand: true,
            cwd: 'templates/tex/',
            src: ['build-tex'],
            dest: 'tmp/'
          }, {
            expand: true,
            cwd: 'templates/tex/',
            src: ['.latexmkrc'],
            dest: 'tmp/'
          },{
            expand: true,
            cwd: 'node_modules/',
            src: ['font-awesome/css/*', "font-awesome/fonts/*"],
            dest: 'dist/assets/'
          }
        ],
      },
    },
    exec: {
      build_tex: "bash tmp/build-tex"
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'sass', 'assemble', 'copy', 'exec']);

};
