import express from "express";

const app = express();

const port = 3000;

app.get("/" , (req, res) =>{
    res.send("<h1>This is the homepage</h1>");
    
});
app.get("/about" , (req, res) =>{
    res.send("<h1>this is the about page</h1>");
    
});
app.get("/contact" , (req, res) =>{
    res.send("<h1>Below are my contacts</h1>");
    
});

app.listen(port, ()=>{
    console.log("Listening on port 3000");
})
