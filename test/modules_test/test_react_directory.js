'use strict';
/* jshint expr: true */

const {
    
    constants: {

        TEMPORARY_TEST_FILES
    }

} = require( '../utils' ); 

const execa = require( 'execa' );


module.exports = ({ directory }) => {

    const testDirectory = (
        
        `test/${ TEMPORARY_TEST_FILES }/React/${ directory }/`
    );

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