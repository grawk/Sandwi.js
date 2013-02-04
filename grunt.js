module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		lint: {
			all: ['grunt.js', 'lib/**/*.js', 'public/js/lib/paypal/**/*.js', 
			'public/js/controller/**/*.js', 'public/js/core/**/*.js', 'public/js/view/**/*.js']
		},
		jshint: {
			options: {
				browser: true
			}
		}
	});

	
	// Default task.
	grunt.registerTask('test', ['lint','mochaphantom']);

	grunt.registerTask('mochaphantom', 'run mocha-phantomjs', function() {
		var done = this.async();
		require('child_process').exec('mocha-phantomjs ./mocha-runner/test.html', function(err, stdout) {
			grunt.log.write(stdout);
			done(err);
		});
	});
};