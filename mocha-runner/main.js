/*
 * Configure require, launch mocha unit tests
 *
 */
(function(module) {
	"use strict";
	
	if(typeof window !== "undefined" && navigator && document) {
		// Configure requires and bootstap app, conditionally loading JSON support
		require.config({
			baseUrl: "../public/js"
		});
		require(["main-config"], function(config) {
			//apply main app require config
			require.config(config);

			//apply mocha specific additions to require config
			require.config({
				paths: {
					"chai": "../../mocha-runner/chai",
					"mocha": "../../mocha-runner/mocha",
					"domUtil": "../../spec/util/dom",
					"specs": "../../spec/specs"
					//TODO: stub out current ajax.js with a mock version
				},
				shim: {
					"mocha": {
						exports: function() {
							return window.mocha;
						}
					}
				}
			});
			require(['require', 'chai', 'mocha', 'specs'], function(require, chai, mocha, specs) {
				//console.log(specs);
				var should = chai.should();
				mocha.setup('bdd');
				require(specs, function() {
					if(window.mochaPhantomJS) {
						mochaPhantomJS.run();
					} else {
						window.mocha.run();
					}
				});
			});
		});

	}

	/*global module:true*/
}(typeof module === "undefined" ? {} : module)); /*global module:false*/