/**
* Comments are for the weak
*
*/
(function() {
	window.Sandwi = {
		js: null
	};
	var defaults = {
		bread: "rye",
		meat: "roast beef",
		condiments: ["mayo", "mustard", "lettuce", "tomato", "pickles"]
	};
	window.Sandwi.js = {
		var sandwich = (config) ? config : defaults;
		this.toString = function() {return "I am a sandwich"};
	};
	window.Sandwi.js.prototype.toString = function() {
		return "I am a sandwich";
	}
})();