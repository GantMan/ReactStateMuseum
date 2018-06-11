'use strict';
/* jshint expr: true */

const bluebird = require( 'bluebird' );

const {
    
    getDirectories,

    constants: {

        TEMPORARY_TEST_FILES
    }

} = require( '../utils' ); 

const testReactDirectory = require( './test_react_directory' );

const testReactNativeDirectory = require( './test_react_native_directory' );

const execa = require( 'execa' );


describe( 'Modules Test', function() {

    this.timeout( Infinity );

    before( function() {

        return removeTemporaryTestFiles();
    });

    [
        {
            title: 'Each React module passes test',

            pathForLibraries: 'React',

            testDirectory: testReactDirectory
        },

        {
            title: 'Each React Native module passes test',

            pathForLibraries: 'ReactNative',

            testDirectory: testReactNativeDirectory
        }

    ].forEach( ({

        title,

        pathForLibraries,

        testDirectory

    }) => {

        it( title, function() {

            return getDirectories({
                
                path: pathForLibraries
            
            }).then( directories => {

                // NOTE: used to run test on single directory
                // if( true ) return testDirectory({ directory: directories[ 0 ] }).then( testResult => [ testResult ] );

                return bluebird.mapSeries(

                    directories,

                    directory => testDirectory({ directory })
                );

            }).then( testResults => {

                console.log(
                    
                    'Results:',
                    
                    JSON.stringify( testResults, null, 4 )
                );

                const errorDirectories = testResults.filter(
                    
                    result => !!result.error

                ).map(
                    
                    errorResult => errorResult.directory
                );

                if( errorDirectories.length > 0 ) {

                    throw new Error(
                        
                        `${ pathForLibraries } libraries that ` +
                        `failed the test: ` +
                        JSON.stringify( errorDirectories )
                    );
                }
            });
        });
    });
});


// helper functions
function removeTemporaryTestFiles() {

    console.log( 'removing existing temporary test files' );

    return execa(
    
        'rm', 

        [
            '-rf',
            TEMPORARY_TEST_FILES,
        ],

        {
            cwd: `${ process.cwd() }/test`
        }
    
    ).then( () => {

        console.log(
            
            'successfully removed existing temporary test files'
        );
    });
}