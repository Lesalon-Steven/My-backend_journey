import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import { dirname } from "path";

const app = express();
const port = 3000;

var bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));



function bandNameGenerator(req, res, next){
    console.log(req.body);

    bandName = req.body["street"] + req.body["pet"];

    next();

};

app.use(bandNameGenerator);

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
    res.send("<h2>Your band name is: </h2>"+ bandName);
});

app.listen(port, ()=>{
    console.log("the connection is successful");
});
