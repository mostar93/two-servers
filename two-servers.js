var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestnice (request, response){
    response.end ("your cool" + request.url);
}

function handleRequestbad (request, response){
    response.end ("go to hell" + request.url);
}

var server1 = http.createServer(handleRequestnice);
var server2 = http.createServer(handleRequestbad);

server1.listen(PORT1, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
  });

  server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });


