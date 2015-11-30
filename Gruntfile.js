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
    exec: {
      build_tex: "./build-tex"
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-exec');

  // Default task(s).
  grunt.registerTask('default', ['clean','assemble','exec']);

};
