// my first server side code
let myHttp = require("http");

// arguments
// 1. fnc that will run on http requoest
let myServer = myHttp.createServer(
  
  function( myRequest, myResponse) {
    console.log( myRequest.url );

    let myText = "I don't know you thats my purse.";
    if( myRequest.url === '/hey') {
      myText = "Hello Bobby";
    }
    // writeHead() creates an http response header. including status code( 200 ok)
    myResponse.writeHead( 200, 
                           {"Context-Type": "text/plain"} );

    // end() returns some data and cxloses the response (sends it)
    myResponse.end( myText+ "\n");
  }
);

// ask http to start listening on a tcp port for incoming http requests
myServer.listen(
                  8080,      //tcp port
                  "0.0.0.0"  //ip address
                );

console.log("server has started")