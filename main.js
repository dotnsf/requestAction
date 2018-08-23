// main.js
async function myAction( params ){
  try{
    const result = await getHtml( params );
    return result;
  }catch( err ){
    return err;
  }
}

function getHtml( params ){
  return new Promise( function( resolve, reject ){
    if( params.url ){
      const request = require( 'request' );

      var options = {
        method: 'GET',
        url: params.url,
        encoding: null
      };
      request( options, function( err, res, buf ){
        if( err ){
          reject( { status: false, error: err } );
        }else{
          var html = buf.toString( 'utf-8' );
          resolve( { status: true, html: html } );
        }
      });
    }else{
      reject( { status: false, error: 'parameter url is needed.' } );
    }
  });
}

exports.main = myAction;
