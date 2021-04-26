// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

// List array
let items = ["Buy Food", "Cook Food", "Eat Food"];

// ┌────────────────────────┐
// │   Initialize Modules   │	
// └────────────────────────┘

// Use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Use EJS as view engine
app.set("view engine", "ejs");

// ┌──────────────────────┐
// │   Server Functions   │	
// └──────────────────────┘

app.get("/", function(req, res){
    const today = new Date();
    
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    const day = today.toLocaleDateString("en-US", options);

    // Render list.ejs
    res.render("list", {kindOfDay: day, newListItems: items})
});

app.post("/", function(req, res){
    const item = req.body.newItem;
    items.push(item);

    // Send back to home page (to re-render)
    res.redirect("/");
})

app.listen(port, function(){
    console.log("Server started on port " + port);
});