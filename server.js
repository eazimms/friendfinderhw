var express = require('express'); 

var path = require('path'); 

var app = express(); 

var PORT = process.env.PORT || 8080; 


app.use(express.urlencoded(true)); 
app.use(express.json()); 

require('./routes/apiRoutes'); 
require('./routes/htmlRoutes'); 

app.listen(PORT, function(){
  console.log('Server is listening on port: ' + PORT); 
}); 
