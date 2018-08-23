// main.js
async function myAction( params ){
  try{
    const result = await getFx( params );
    return result;
  }catch( err ){
    return err;
  }
}

function getFx( params ){
  return new Promise( function( resolve, reject ){
    const request = require( 'request' );
    const fxserver = 'https://fx.mybluemix.net/';

    var options = {
      method: 'GET',
      url: fxserver,
      encoding: null
    };
    request( options, function( err, res, buf ){
      if( err ){
        reject( { status: false, error: err } );
      }else{
        var rate = {};
        var result = buf.toString( 'utf-8' );
        resolve( { status: true, result: JSON.parse( result ) } );
      }
    });
  });
}

exports.main = myAction;
