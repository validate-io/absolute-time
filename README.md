Absolute Time
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is formatted as absolute time.


## Installation

``` bash
$ npm install validate.io-absolute-time
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isAbsoluteTime = require( 'validate.io-absolute-time' );
```

#### isAbsoluteTime( value )

Validates whether an input `string` is an absolute date; e.g., `2014/07/18-9:34:42`. An absolute date is formatted according to the following rules:

*	`year`, `month`, and `day` are separated by `/`: `year/month/day`
* 	calendar values are separated from temporal values by either a space or `-`: `year/month/day-00:00:00` or `year/month/day 00:00:00`
*	if specified, hour and minutes must be specified together: `00:00`
*	seconds are optional


``` javascript
var value = '2014/01/01 0:00:01';

var bool = isAbsoluteTime( value );
// returns true
```


__Note__: the method returns `false` for any `value` which is not a `string`.


## Examples

``` javascript
console.log( isAbsoluteTime( '2014/07/14' ) );
// returns true

console.log( isAbsoluteTime( '2014/07/14 9:23' ) );
// returns true

console.log( isAbsoluteTime( '2014/07/18-9:34:42' ) );
// returns true

console.log( isAbsoluteTime( '2014-07-14 9:34:42' ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-absolute-time.svg
[npm-url]: https://npmjs.org/package/validate.io-absolute-time

[travis-image]: http://img.shields.io/travis/validate-io/absolute-time/master.svg
[travis-url]: https://travis-ci.org/validate-io/absolute-time

[coveralls-image]: https://img.shields.io/coveralls/validate-io/absolute-time/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/absolute-time?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/absolute-time.svg
[dependencies-url]: https://david-dm.org/validate-io/absolute-time

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/absolute-time.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/absolute-time

[github-issues-image]: http://img.shields.io/github/issues/validate-io/absolute-time.svg
[github-issues-url]: https://github.com/validate-io/absolute-time/issues
