var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// when the next line is not commented out, main route is served with index.html via express.static
app.use(express.static('public'));

// main route
app.get('/', function(req, res) {
	 res.send('This is the main route.');
	// when use(express.static) is active the line above is overrided
});

// test route to EJSindex.ejs 
app.get('/ejs-test', function(req, res) {
	res.render('EJSindex');
});

app.listen(PORT, process.env.IP, function(){
    console.log('Server started on port', PORT);
});
