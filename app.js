const express = require('express');
const app = express();

//const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send("Update");
})

app.listen(3000, () =>{
    console.log("Superrrr oldumuki");
    console.log("Bence Oldu");
});
