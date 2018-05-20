'use strict';
/* jshint expr: true */
const ROOT_PATH = '../';

// const { expect } = require( 'chai' );

const fs = require( 'fs' );


describe( 'README.MD Tests', function() {

    it( 'Each folder has been mentioned in the readme', function() {

        // TODO: add logic to get the directories

        return getReadme().then( readme => {

            console.log( readme );
        });
    });
});



// helper functions
const getReadme = () => {

    const README_PATH = `${ __dirname }/${ ROOT_PATH }/README.md`;

    return new Promise( ( resolve, reject ) => {

        fs.readFile( README_PATH, ( err, data ) => {

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
