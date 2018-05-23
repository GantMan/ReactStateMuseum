'use strict';

const ROOT_PATH = '../';

const { lstat, readdir } = require( 'fs' );


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

            const itemPath = (
                
                `${ __dirname }/${ ROOT_PATH }/${ path }/${ item }`
            );
            
            const returnIfIsDirectoryPromise = new Promise(
                
                ( resolve, reject ) => {
                    
                    lstat( itemPath, ( err, stats ) => {

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
    
    }).then( returnIfIsDirectoryResults => {

        const directories = returnIfIsDirectoryResults.filter(
            
            directoryOrNull => !!directoryOrNull
        );
        
        return directories;
    });
};


module.exports = {

    getDirectories,
};