(function (){
	window.Sandwi = {js:null};
	var defaults = {bread: "rye",meat: "roast beef",condiments: ["mayo","mustard","lettuce","tomato","pickles"]};
	window.Sandwi.js = function(config) {
		var sandwich = (config) ? config : defaults;
		
};
	window.Sandwi.js.prototype.toString = function() {
		return "I am a sandwich";
}
})();
