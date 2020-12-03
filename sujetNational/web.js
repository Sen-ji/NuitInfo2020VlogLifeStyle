
//const Entities = require('html-entities').XmlEntities
//const entities = new Entities()

 //const ys = require('youtube-audio-stream')
 var express = require('express'),
     //cors = require('cors'),
     app = express(),
     server = require('http').createServer(app)
     //ent = require('ent'),
     //fs = require('fs');
 //var mysql = require('mysql');

//----------BDD----------

// var pool = mysql.createPool({
//     host: "192.168.1.21",
//     user: "**",
//     password: "**",
//     database: "**"
// });

//-------parametre-------
app.use(express.static('static')) 

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
server.listen(80, () => {       //écoute port 80
   console.log('CORS-enabled web server listening on port 80')
})

//------------creation variable-------



app.get('', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});
app.get('/p4', (req, res) => {
    res.sendFile(__dirname + '/static/p4.html');
});
app.get('/bot', (req, res) => {
    res.sendFile(__dirname + '/static/bot.html');
});
app.get('/bot/oui', (req, res) => {
    res.sendFile(__dirname + '/static/oui.html');
});
app.get('/projet', (req, res) => {
    res.sendFile(__dirname + '/static/projet.html');
});
app.get('/membre', (req, res) => {
    res.sendFile(__dirname + '/static/membre.html');
});


