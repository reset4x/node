const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/',(req,res) => {
    res.send("Uygulama başarılı ayağa kalktı 2");
})

app.listen(port, () =>{
    console.log("Superrrr oldumuki");
    console.log("Bence Oldu");
});
