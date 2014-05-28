module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/bootstrap-sass-official/vendor/assets/stylesheets', 'bower_components/fontawesome/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'web/css/app.css': 'frontend/scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'frontend/scss/**/*.scss',
        tasks: ['sass']
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/fontawesome/fonts/**'], dest: 'web/fonts', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/angular/angular.min.js'], dest: 'web/js/libs', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/angular-resource/angular-resource.min.js'], dest: 'web/js/libs', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/angular-route/angular-route.min.js'], dest: 'web/js/libs', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/angular-animate/angular-animate.min.js'], dest: 'web/js/libs', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/**'], dest: 'web/js/libs/bootstrap', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/**'], dest: 'web/fonts/bootstrap', filter: 'isFile'},
          {expand: true, flatten: true, src: ['frontend/js/**'], dest: 'web/js', filter: 'isFile'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('build', ['sass', 'copy']);
  grunt.registerTask('default', ['watch']);
}