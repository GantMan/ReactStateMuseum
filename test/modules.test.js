'use strict';
/* jshint expr: true */
// const ROOT_PATH = '../';

const bluebird = require( 'bluebird' );

const { getDirectories } = require( './utils' ); 

const execa = require( 'execa' );

const TEMPORARY_TEST_FILES = 'temporary_test_files';


describe( 'Modules Test', function() {

    this.timeout( Infinity );

    before( function() {

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
    });

    it( 'Each React module passes test', function() {

        return getDirectories({ path: 'React' }).then( reactDirectories => {

            return bluebird.mapSeries(

                reactDirectories,

                directory => testReactDirectory({ directory })
            );

        }).then( testResults => {

            console.log( 'Results:', JSON.stringify( testResults, null, 4 ) );

            const errorDirectories = testResults.filter(
                
                result => !!result.error

            ).map(
                
                errorResult => errorResult.directory
            );

            if( errorDirectories.length > 0 ) {

                throw new Error(
                    
                    'React libraries that failed the test: ' +
                    JSON.stringify( errorDirectories )
                );
            }
        });
    });
});


const testReactDirectory = ({ directory }) => {

    const testDirectory = `test/${ TEMPORARY_TEST_FILES }/${ directory }/`;

    const fullTestDirectoryPath = `${ process.cwd() }/${ testDirectory }`;

    let stage = 'start';

    return execa(
        
        'mkdir',

        [
            '-p',
            testDirectory,
        ]

    ).then( () => {

        stage = 'copy';

        return execa(
        
            'cp',
    
            [
                '-a',
                `React/${ directory }/.`,
                testDirectory,
            ]
        );
    
    }).then( () => {

        stage = 'yarn';
        
        console.log( `running yarn in ${ testDirectory }` );

        return execa(
        
            'yarn',

            [],

            {
                cwd: fullTestDirectoryPath
            }
        );  

    }).then( () => {

        stage = 'yarn build';

        console.log( `running yarn build in ${ testDirectory }` );

        return execa(
        
            'yarn',

            [
                'build',
            ],

            {
                cwd: fullTestDirectoryPath
            }
        );  

    }).then( () => {

        stage = 'CI=true yarn test';

        console.log( `running CI=true yarn test in ${ testDirectory }` );

        return execa(
        
            'yarn', 

            [
                'test'
            ],
            {
                cwd: fullTestDirectoryPath,
                env: {

                    CI: true
                }
            }
        );  

    }).then( () => {
        
        stage = 'finish';

        console.log( `${ directory } passed test` );
        
        return {
    
            directory,
            passedTests: true,
            // data: result.stdout
        };

    }).catch( err => {

        console.log( `${ directory } failed test at stage: ${ stage }` );

        return {
            
            passedTests: false,
            directory,
            error: err
        };
    });
};