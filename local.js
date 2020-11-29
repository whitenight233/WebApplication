var http = require('http');
var qs = require('querystring');
var postHTML = '<html><head></head>' +
  '<body>' +
  '<h2>Login success</h2>'+'<A HREF="home.html">Back to home</A>'+
  '</body></html>';

http.createServer(function (request, response) {
  /* Recieve request from login page */
    if (request.method == 'POST') {
        console.log('recieved');
        response.end(postHTML);
        /* Display success message*/   
        };
    }).listen(8080);
