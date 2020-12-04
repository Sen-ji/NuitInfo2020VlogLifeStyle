
//const Entities = require('html-entities').XmlEntities
//const entities = new Entities()

//const ys = require('youtube-audio-stream')
var express = require('express'),
    //cors = require('cors'),
    app = express(),
    server = require('http').createServer(app)
//ent = require('ent'),
//fs = require('fs');
var mysql = require('mysql');

//----------BDD----------

var pool = mysql.createPool({
    host: "192.168.1.21",
    //host : sangi.ddns.net
    user: "DA",
    password: "DA",
    database: "nuit"
});

//-------parametre-------
app.use(express.static('public'))

//dossier static
// var serveur = require('https').createServer({
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem'),
// }, app).listen(443, () => {
//     console.log('CORS-enabled web server listening on port 443')
// });
// const oui = require('./oui.json')
// app.use(cors()) //lancement cors
// app.get('/products/:id', (req, res, next) => {      //param cors
//     res.json({ msg: 'This is CORS-enabled for all origins!' })
// })
// io = require('socket.io').listen(serveur)
server.listen(8080, () => {       //écoute port 80
    console.log('CORS-enabled web server listening on port 8080')
})

//------------creation variable-------



app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('lifegame', (req, res) => {
    res.sendFile(__dirname + '/public/lifegame');
});

app.get('/carbon', (req, res) => {
    res.sendFile(__dirname + '/public/carbon.html');

});
