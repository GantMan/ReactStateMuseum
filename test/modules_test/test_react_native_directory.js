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
        
        `test/${ TEMPORARY_TEST_FILES }/ReactNative/${ directory }/`
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
                `ReactNative/${ directory }/.`,
                testDirectory,
            ]
        );
    
    }).then( () => {

        stage = 'npm install';

        console.log( `running npm install in ${ testDirectory }` );
        
        return execa(
        
            'npm',

            [
                'install',
            ],

            {
                cwd: fullTestDirectoryPath
            }
        );
    
    }).then( () => {

        stage = 'ios';

        console.log( `running iOS command in ${ testDirectory }` );

        return execa(

            'react-native',

            [
                'build',
                '--entry-file',
                './index.js',
                '--platform',
                'ios',
                '-dev',
                'false',
                '--reset-cache',
                '--bundle-output',
                './ios/main.jsbundle',
                '--assets-dest',
                './ios/release/main.jsbundle'
            ],

            {
                cwd: fullTestDirectoryPath
            }
        );  

    }).then( () => {

        stage = 'android';

        console.log( `running android command in ${ testDirectory }` );

        return execa(
        
            'react-native',

            [
                'bundle',
                '--entry-file',
                './index.js',
                '--platform',
                'android',
                '--dev',
                'false',
                '--reset-cache',
                '--bundle-output',
                './android/main.jsbundle',
                '--assets-dest',
                './android/app/build/main.jsbundle'
            ],

            {
                cwd: fullTestDirectoryPath
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