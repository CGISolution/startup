module.exports = function (grunt)
{
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['public/false'],
                    compress: false
                },
                files: {
                    'public/css/main.css': 'public/less/main.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
};
