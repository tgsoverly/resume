module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean:{
      build:["tmp", "dist"]
    },
    assemble: {
      options: {
        // assets: 'html/assets',
        partials: ['html/partials/**/*.hbs'],
        // layoutdir: ['html/layouts'],
        flatten: true,
        data: ['data/*.{json,yml}']
      },
      html: {
        options: {
          partials: ['html/partials/**/*.hbs'],
        },
        src: ['html/templates/*.hbs'],
        dest: 'dist/'
      },
      tex: {
        options: {
          partials: ['tex/partials/**/*.hbs'],
        },
        src: ['tex/templates/*.hbs'],
        dest: 'tmp/'
      }
    },
    copy:{
      main: {
         files: [

           // makes all src relative to cwd
           {expand: true, cwd: 'tex/', src: ['bib/**'], dest: 'tmp/'},
           {expand: true, cwd: 'tex/', src: ['garamond/**'], dest: 'tmp/'},
           {expand: true, cwd: 'tex/', src: ['build-tex'], dest: 'tmp/'},
           {expand: true, cwd: 'tex/', src: ['.latexmkrc'], dest: 'tmp/'},
         ],
       },
    },
    exec: {
      build_tex: "sh tmp/build-tex"
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['clean','assemble','copy','exec']);

};
