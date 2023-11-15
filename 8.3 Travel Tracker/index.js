import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "144600",
  port: "5432"
});

db.connect();


// async function checkvisited(){

//   const result =  await db.query("select country_code from visited_countries");
//   let countries = [];
//   result.rows.forEach((i)=> {
//     countries.push(i.country_code);
//    });

//    return countries;
// }



app.get("/", async (req, res) => {

  //Write your code here.
  const result =  await db.query("select country_code from visited_countries");
  let countries = [];
  result.rows.forEach((i)=> {
    countries.push(i.country_code);
   });
  //const countries = await checkvisited();
  console.log(result.rows);
  
   
  
  res.render("index.ejs",{countries : countries, total: countries.length});
  //db.end();
});

//app.post("/add", async (req, res)=>{
  //db.connect();
 //var country_name = req.body["country"];
//  var result = await db.query("select country_code from countries where country_name = $1", [country_name]); 
//  if(result.rows.length !=0){
//   const data = result.rows[0];
//   const country_code = data.country_code;

//    await db.query("insert into visited_countries(country_code) values($1)", [country_code]);
//  //db.end();

//  }
 
// res.redirect("/");
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
