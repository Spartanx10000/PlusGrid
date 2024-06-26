module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'src/css/',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/',
            ext: '.min.css'
          }]
        }
      }
    });
  
    // Load the plugin that provides the "cssmin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    // Default task(s).
    grunt.registerTask('default', ['cssmin']);
  
  };