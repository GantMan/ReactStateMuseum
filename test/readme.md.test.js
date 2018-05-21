'use strict';
/* jshint expr: true */
const ROOT_PATH = '../';

const bluebird = require( 'bluebird' );

// const { expect } = require( 'chai' );

const { lstat, readdir, readFile } = require( 'fs' )


describe( 'README.MD Tests', function() {

    it( 'Each folder has been mentioned in the readme', function() {


        return bluebird.props({
            
            readme: getReadme(),
            reactDirectories: getDirectories({ path: 'React' }),
            reactNativeDirectories: getDirectories({ path: 'ReactNative' }),
            
        }).then( ({

            readme,
            reactDirectories,
            reactNativeDirectories

        }) => {

            console.log( !!readme );
            console.log( reactDirectories );
            console.log( reactNativeDirectories );
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
        
        return readdir( fullPath, ( err, contents ) => {

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
            
            const returnIfIsDirectory = new Promise( ( resolve, reject ) => {
                
                lstat( ITEM_PATH, ( err, stats ) => {

                    if( !!err ) {

                        return reject( err );
                    }
                    else if( !stats.isDirectory() ) {

                        return resolve( null );
                    }

                    resolve( item );
                });
            });

            returnIfIsDirectoryPromises.push( returnIfIsDirectory );
        });

        return Promise.all( returnIfIsDirectoryPromises );
    
    }).then( results => {

        const directories = results.filter( directory => !!directory );
        
        return directories;
    });
};
