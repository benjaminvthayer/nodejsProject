var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views', __dirname +'/views');
app.use(express.static(__dirname+'/public'));
app.get('/', function (req, res) {
  res.render('index')
})
app.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');