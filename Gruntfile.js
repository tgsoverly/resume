module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: {
      build: ["tmp", "dist"]
    },
    sass: {
      dist: {
        files: {
          'dist/assets/style.css': 'html/assets/style.scss'
        },
        options: {
          loadPath: ['node_modules/foundation-sites/scss', 'html/assets']
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
          helpers: ['html/helpers/*'],
          partials: ['html/partials/**/*.hbs'],
          layout: 'html/layouts/layout.hbs'
        },
        src: ['templates/*.hbs'],
        dest: 'dist/'
      },
      tex: {
        options: {
          helpers: ['tex/helpers/*'],
          partials: ['tex/partials/**/*.hbs'],
        },
        src: ['templates/*.hbs'],
        dest: 'tmp/'
      }
    },
    copy: {
      main: {
        files: [

          // makes all src relative to cwd
          {
            expand: true,
            cwd: 'tex/',
            src: ['bib/**'],
            dest: 'tmp/'
          }, {
            expand: true,
            cwd: 'tex/',
            src: ['garamond/**'],
            dest: 'tmp/'
          }, {
            expand: true,
            cwd: 'tex/',
            src: ['build-tex'],
            dest: 'tmp/'
          }, {
            expand: true,
            cwd: 'tex/',
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
