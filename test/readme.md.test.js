'use strict';
/* jshint expr: true */
const ROOT_PATH = '../';

const bluebird = require( 'bluebird' );

const { lstat, readdir, readFile } = require( 'fs' )

const GITHUB_URL = "https://github.com/GantMan/ReactStateMuseum";


describe( 'README.MD Tests', function() {

    it( 'Each folder has a link to it in the readme', function() {

        return bluebird.props({
            
            readme: getReadme(),
            reactDirectories: getDirectories({ path: 'React' }),
            reactNativeDirectories: getDirectories({ path: 'ReactNative' }),
            
        }).then( ({

            readme,
            reactDirectories,
            reactNativeDirectories

        }) => {

            const missingReactLinks = [];

            for( const reactDirectory of reactDirectories ) {

                const linkToDirectory = (

                    `${ GITHUB_URL }/tree/master/React/${ reactDirectory }`
                );

                if( !readme.includes( linkToDirectory ) ) {
                    
                    missingReactLinks.push( linkToDirectory );
                }
            }

            const missingReactNativeLinks = [];

            for( const reactNativeDirectory of reactNativeDirectories ) {

                const linkToDirectory = (

                    `${ GITHUB_URL }/tree/master/` +
                    `ReactNative/${ reactNativeDirectory }`
                );

                if( !readme.includes( linkToDirectory ) ) {
                    
                    missingReactNativeLinks.push( linkToDirectory );
                }
            }

            if(
                (missingReactLinks.length > 0) ||
                (missingReactNativeLinks.length > 0)
            ) {

                const errorMessage = (
                    
                    'Missing React links:' +
                    JSON.stringify( missingReactLinks ) +
                    ', missing React Native links:' +
                    JSON.stringify( missingReactNativeLinks ) +
                    '.'
                );

                throw new Error( errorMessage );
            }
        });
    });
});


// helper functions
const getReadme = () => {

    const README_PATH = `${ __dirname }/${ ROOT_PATH }/README.md`;

    return new Promise( ( resolve, reject ) => {

        readFile( README_PATH, ( err, data ) => {

            if( !!err ) {

                return reject( err );
            }

            resolve( data );
        });

    }).then( readmeAsBuffer => {

        const readme = readmeAsBuffer.toString( 'ascii' );

        return readme;
    });
};


const getDirectories = ({ path }) => {

    const fullPath = `${ __dirname }/${ ROOT_PATH }/${ path }`;

    return new Promise( ( resolve, reject ) => {
        
        readdir( fullPath, ( err, contents ) => {

            if( !!err ) {

                return reject( err );
            }

            resolve( contents );
        });

    }).then( contents => {

        const returnIfIsDirectoryPromises = [];

        contents.forEach( item => {

            const ITEM_PATH = (
                
                `${ __dirname }/${ ROOT_PATH }/${ path }/${ item }`
            );
            
            const returnIfIsDirectoryPromise = new Promise(
                
                ( resolve, reject ) => {
                    
                    lstat( ITEM_PATH, ( err, stats ) => {

                        if( !!err ) {

                            return reject( err );
                        }
                        else if( !stats.isDirectory() ) {

                            return resolve( null );
                        }

                        resolve( item );
                    });
                }
            );

            returnIfIsDirectoryPromises.push( returnIfIsDirectoryPromise );
        });

        return Promise.all( returnIfIsDirectoryPromises );
    
    }).then( results => {

        const directories = results.filter(
            
            directoryOrNull => !!directoryOrNull
        );
        
        return directories;
    });
};
