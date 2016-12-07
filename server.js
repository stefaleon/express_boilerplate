const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

// main route
app.get('/', (req, res) => {
	 res.render('main');
});

// list polls
app.get('/about', (req, res) => {
	res.render('about');
});

app.listen(PORT, process.env.IP, () => {
    console.log('Server started on port', PORT);
});
