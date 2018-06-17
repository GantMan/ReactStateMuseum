'use strict';
/* jshint expr: true */

var useExhaustive = process.argv.indexOf('--exhaustive') >= 0;
describe( 'React State Museum Tests', function() {

    require( './readme.md.test' );

    if (useExhaustive) {
        require( './modules_test' );
    }
});
