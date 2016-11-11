var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.send('This is the main route.');
});

app.listen(PORT, process.env.IP, function(){
    console.log('Server started on port', PORT);
});
