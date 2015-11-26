module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    assemble: {
      options: {
        // assets: 'html/assets',
        partials: ['html/partials/**/*.hbs'],
        // layoutdir: ['html/layouts'],
        flatten: true,
        data: ['data/*.{json,yml}']
      },
      cv: {
        // options: {
        //   "layout.hbs"
        // },
        src: ['html/templates/cv.hbs'],
        dest: 'dist/'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-assemble');

  // Default task(s).
  grunt.registerTask('default', ['assemble']);

};
