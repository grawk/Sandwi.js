define(['view/index','jquery', 'domUtil'], function(signup, $, domUtil) {

	//assign the harness element
	domUtil.setHarnessContainer(($("#harness").length > 0) ? $("#harness") : $("body"));
	
	describe('index view', function() {
		it('should have an init function', function() {
			signup.init.constructor.should.equal(Function);
		});
	});

});