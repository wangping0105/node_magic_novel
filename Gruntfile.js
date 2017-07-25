module.exports = function(grunt) {

  // 任务配置,所有插件的配置信息
  grunt.initConfig({
    //获取 package.json 的信息
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        stripBanners: true,
        banner: '/*! <%=pkg.name%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        src: 'src/test.js',
        dest:"build/<%=pkg.name%>-<%=pkg.version%>.js.min.js"
      }
    },
    cssmin: {
      options: {
        stripBanners: true,
        banner: '/*! <%=pkg.name%>.css <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        src: 'src/test.css',
        dest:"build/<%=pkg.name%>-<%=pkg.version%>.css.min.css"
      }
    },
    jshint:{
      build: ["Gruntfile.js", "src/*.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },
    // watch插件的配置信息
    watch: {
      js: {
        files: [
          'src/*.js'
        ],
        tasks: [
          'jshint',
          'uglify',
        ],
        options: { spawn: false}
      },
      css:{
        files: [
          'src/*.css'
        ],
        tasks: [
          'cssmin'
        ],
        options: { spawn: false}
      }
    }

  });


  // 告诉grunt我们将使用插件, 顺序无所谓
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //告诉我们再终端输入grunt的时候做啥, 注意顺序
  grunt.registerTask('default', [
    "jshint",
    "uglify",
    "cssmin",
    "watch"
  ]);
};