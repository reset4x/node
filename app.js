const express = require('express');
const app = express();


app.get('/',(req,res) => {
    res.send("Uygulama başarılı ayağa kalktı 2");
})
