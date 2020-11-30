@test
var server = require ('../lib/server');
describe('server',function()){
  /**
 * test the server is online or not
 *
 */
  server.listen(8080)
});
after(function(){
  server.close();
});
});
