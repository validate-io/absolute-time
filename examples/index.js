var validate = require( './../lib' );

validate( '2014/07/14' );
// Returns true

validate( '2014/07/14 9:23' );
// Returns true

validate( '2014/07/18-9:34:42' );
// Returns true

validate( '2014-07-14 9:34:42' );
// Returns false