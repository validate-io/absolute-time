/**
*
*	VALIDATE: absolute-time
*
*
*	DESCRIPTION:
*		- Validates if a value is formatted as absolute time.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	var // Absolute time formatting; e.g., 2014/07/18-9:34:42:
		format = /^\d{4}\/\d{1,2}\/\d{1,2}$|^\d{4}\/\d{1,2}\/\d{1,2}\s|\-\d{1,2}:\d{2}$|^\d{4}\/\d{1,2}\/\d{1,2}\s|\-\d{1,2}:\d{2}:\d{2}$/;


	/**
	* FUNCTION: isAbsolute( time )
	*	Validates whether a time is an absolute time.
	*
	* @example Example absolute time.
	*	// returns true
	* isAbsolute( '2014/07/14-9:23:23' );
	*
	* @example Example absolute time.
	*	// returns true
	* isAbsolute( '2014/07/14 9:23' );
	*
	* @example Example absolute time.
	*	// returns true
	* isAbsolute( '2014/07/14' );
	*
	* @param {String} time - time to validate
	* @returns {Boolean} boolean indicating whether a time is formatted as absolute time.
	*/
	function isAbsolute( time ) {
		if ( typeof time !== 'string' ) {
			return false;
		}
		return format.test( time );
	} // end FUNCTION isAbsolute()


	// EXPORTS //

	module.exports = isAbsolute;

})();