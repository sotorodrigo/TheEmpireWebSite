const express = require ("express");
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, "./public")));

app.set('view engine', 'ejs');

app.listen(3000, ()=> {
    console.log("server runnning on port 3000");
})