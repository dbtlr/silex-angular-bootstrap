module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/bootstrap-sass-official/vendor/assets/stylesheets']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },

    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, flatten: true, src: ['bower_components/jquery/jquery.min.js'], dest: 'js/libs', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/modernizr/modernizr.js'], dest: 'js/libs', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/foundation/js/foundation.min.js'], dest: 'js/libs', filter: 'isFile'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('build', ['sass', 'copy', 'jekyll:build']);
  grunt.registerTask('default', ['jekyll:server','watch']);
  grunt.registerTask('server', ['build', 'concurrent']);