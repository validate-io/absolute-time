/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	validate = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-absolute-time', function tests() {

	it( 'should export a function', function test() {
		expect( validate ).to.be.a( 'function' );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			Date.now().toString(),
			'7h-ago',
			[],
			{},
			true,
			null,
			undefined,
			NaN,
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !validate( values[i] ) );
		}
	});

	it( 'should positively validate', function test() {
		assert.ok( validate( '2014/08/02' ) );
		assert.ok( validate( '2014/08/02 09:34' ) );
		assert.ok( validate( '2014/08/02-09:34' ) );
		assert.ok( validate( '2014/08/02 09:34:54' ) );
		assert.ok( validate( '2014/08/02-09:34:54' ) );
	});

});
