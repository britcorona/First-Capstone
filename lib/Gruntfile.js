module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../app/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss',
          '../styles/checklist.css': '../sass/checklist.scss',
          '../styles/info.css': '../sass/info.scss',
          '../styles/firstPageStyle.css': '../sass/firstPageStyle.scss',
          '../styles/pricesPageStyle.css': '../sass/pricesPageStyle.scss',
          '../styles/loginPage.css': '../sass/loginPage.scss'
        }
      }
    },
    watch: {
      app: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      },
			sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
    }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};