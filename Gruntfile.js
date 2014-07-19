module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        rasterize: {
            icons: {
                vector: 'icon.svg',
                raster: [
                    { path: 'res/example-small.png', width: 64 },
                    { path: 'res/example-large.png', width: 128 },
                    { path: 'res/example-nowidth.png' }
                ]
            }
        }
    });

    // Load the plugin that provides the "rasterize" task.
    grunt.loadNpmTasks('grunt-rasterize');

    // Default task(s).
    grunt.registerTask('default', ['rasterize']);

};