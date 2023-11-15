//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import Express from "express";
import {fileURLToPath} from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express();

const port = 3000;

app.listen(port, ()=>{
    console.log("App is live");
})

app.use(bodyParser.urlencoded({extended: true}));
var isAuthorised = false;

function logging(req, res, next){

    const passKey = "ILoveProgramming";

    const userKey = req.body["password"];

    if(passKey === userKey){
        isAuthorised = true;
    } else
    {
        app.get("/", (req,res)=>{
            res.sendFile(__dirname+"/public/index.html")
        });
    }

next();


}

app.use(logging);

app.get("/", (req, res)=>{

    res.sendFile(__dirname+"/public/index.html")
});


    app.post("/check", (req,res)=>{

        if(isAuthorised){
            res.sendFile(__dirname+"/public/secret.html");
        } else 
        res.sendFile(__dirname+"/public/index.html");

        
    }) 



