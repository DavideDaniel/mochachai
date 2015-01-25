var expect = require( "chai" )
	.expect;

describe( "a simple test", function () {
	it( "should check if truth is true", function () {
		var truth = true; // this was added after test failed - take it out to see what happens
		expect( truth ) // should tell you truth is not defined so you'll have to define it
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


// Code written from testing first
// ===============================

var truth = true; // defining truth as true

var truthed = function(){
	if ( truth === true ){ // made an if statement to check if truth is true
		console.log("anything can happen!"); // <3 Elle Goulding
	};
};

var addition = function (num1, num2){ // made addition function and required parameters
	console.log(num1 + num2) // returning the result via log
};

var num3 = 3;
var num4 = 4;

addition(num3,num4);