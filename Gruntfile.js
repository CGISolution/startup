module.exports = function (grunt)
{
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['public/less'],
                    compress: false
                },
                files: {
                    // target.css file: source.less
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
};
