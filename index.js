var express = require('express');
var path = require('path');
var textract = require('textract');
var fs = require('fs')
var express = require('express');
var multer  = require('multer');
var crypto = require('crypto');
var mime = require('mime');
var app = express();


const port = process.env.PORT || '5000';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype));
        });
    }
});
var upload = multer({ storage: storage });
var fileupload = require("express-fileupload");

app.set('port', port);
app.use(express.static(__dirname + '/dist/HackUPC'));

app.get('/', function(req, res) {
    res.set('Content-Type', 'text/html')
        .sendFile(path.join(__dirname, '/dist/HackUPC/index.html'))
});
app.post('/ofertas',upload.single('cvpdf'), function(req, res) {
    console.log(req.body) // form fields
    console.log(req.file) // form files
    res.send('file upload')
});
app.get('/ofertas', function(req,res){
  console.log('hola')
  res.send(':)')
})
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
