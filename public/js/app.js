(function(module) {
	"use strict";

		// Configure requires and bootstap app, conditionally loading JSON support
		// get common config
		require(["main-config"], function(config) {
			require.config(config);
			require(["view/index", "jquery"], function(indexView, $) {
				indexView.init();
			});
		});


	/*global module:true*/
}(typeof module === "undefined" ? {} : module)); /*global module:false*/