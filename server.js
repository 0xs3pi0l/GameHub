const express = require("express");
require('dotenv').config();
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("Test");
})

app.listen(port, () => {
    console.log("Server listening on port 3000 ...");
});