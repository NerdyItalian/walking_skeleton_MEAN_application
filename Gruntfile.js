module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                banner:'/*! <%=pkg.name %> <%=grunt.template.today("yyyy-mm-dd") %>*/\n'
            },
            build: {
                src:'client/app.js',
                dest:'server/public/assets/script/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd:"node_modules/",
                src:[
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/js/bootstrap.min.js"
                ],
                "dest":"server/public/vendor/"
            },
            css: {
                expand: true,
                cwd: "client/",
                src:[
                    "stylesheet.css"
                ],
                "dest":"server/public/assets/css"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};