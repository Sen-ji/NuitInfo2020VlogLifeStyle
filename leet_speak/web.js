const express = require('express');
// var server = require('http').createServer(app);x²
var app = express();

app.use(express.static('.'));

app.listen(8080, () => {
	console.log(`Example app listening at http://localhost:8080`)
})

app.get('/', (req, res) => {
	res.sendFile('/index.html');
});
