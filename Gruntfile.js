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
          'web/css/app.css': 'assets/scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'assets/scss/**/*.scss',
        tasks: ['sass']
      },

      js: {
        files: 'assets/js/**/*.js',
        tasks: ['concat']
      },

      templates: {
        files: 'assets/templates/**/*.html',
        tasks: ['copy']
      }
    },

    php: {
        dist: {
            options: {
                port: 5000,
                base: 'web',
                router: 'index.php',
                keepalive: true,
            }
        },
    },

    concurrent: {
      server: {
      tasks: ['php', 'watch'],
        options: {
            logConcurrentOutput: true
        } 
      }
    },

    concat: {
      dist: {
        src: ['assets/js/app/**/*.js'],
        dest: 'web/js/app.js',
      },
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/angular/**'], dest: 'web/js/libs/angular', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/angular-route/**'], dest: 'web/js/libs/angular', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/**'], dest: 'web/js/libs/bootstrap', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/**'], dest: 'web/fonts/bootstrap', filter: 'isFile'},
          {expand: true, flatten: true, src: ['bower_components/fontawesome/fonts/**'], dest: 'web/fonts', filter: 'isFile'},
          {expand: true, cwd: 'assets/templates/', src: ['**'], dest: 'web/templates', filter: 'isFile'},
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-php');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('server', ['concurrent:server']);
  grunt.registerTask('build', ['copy', 'sass', 'concat']);
  grunt.registerTask('default', ['server']);
}