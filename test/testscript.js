var expect = require( "chai" )
	.expect;

describe( "a simple test", function () {
	it( "should pass if true is true", function () {
		expect( true )
			.to.be.true;
	} );
} );

describe( "simply add", function () {
	it( "should add any 2 numbers as parameters", function () {
		var num1 = 1
		var num2 = 2
		num1 + num2
	} );
} );