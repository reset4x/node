var http = require('http');
//Mongoose 'ı ekledik
var mongoose = require('mongoose');
var User = require('./user');


const uri = 'mongodb+srv://testUser:Test1234@reset4cluster-exgxd.mongodb.net/testDB';

mongoose.connect(uri, {useNewUrlParser: true }).then( () => {
  console.log('MongoDB ye bağlanti başarili')
})
.catch( (err) => console.error(err));





/**
 * Dinleyeceğimiz port numarasını aws içindeki environment larda PORT değişkeninden alalım eğer Port değişkeni yok ise default olarak 8081 portunu i dinleyelim.
 */
var port = normalizePort(process.env.PORT || '8081');

const express = require('express');
const app = express();
var bodyparser = require('body-parser');

var urlencoded = bodyparser.urlencoded({extended: false});

/**
 * bir get apisi ile ekrana mesajımızı yazdıralım
 */
app.get('/',(req,res) => {
    res.send("Servis ayağa kalktı");
})


/**
 * bir test get apisi ile ekrana mesajımızı yazdıralım
 */
app.get('/test',(req,res) => {
  res.send("Test başarılı");
})


/**
 * bir post apisi ile ekrana mesajımızı yazdıralım
 */
app.post('/user',urlencoded,(req,res) => {
  res.send("User Post isteği alındı");
})

/**
 * bir post apisi ile ekrana mesajımızı yazdıralım
 */
app.post('/create_user',urlencoded,(req,res) => {
  var user = new User({
    name: req.body.name,
    email:req.body.email
  });
  
  user.save();

  res.send(req.body.name + " li User kayit edildi");
})

/**
 * Şimdi portumuzu dinleyelim.
 */
app.listen(port, () =>{
    console.log("port dinlemek super oldu");
});

/**
 * Port numarası yok ise false, var ise number formatında döndürmek için kullanıyoruz.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

