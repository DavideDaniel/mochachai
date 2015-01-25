// Code written from testing first
// ===============================

var truth = true; // defining truth as true

var truthed = function () {
	if ( truth === true ) { // made an if statement to check if truth is true
		console.log( "anything can happen!" ); // <3 Elle Goulding
	};
};

var addition = function ( num1, num2 ) { // made addition function and required parameters
	console.log( num1 + num2 ); // returning the result via console.log
};

var num3 = 3;
var num4 = 4;

addition( num3, num4 );
truthed();