// ┌──────────────────────┐
// │   Global Variables   │	
// └──────────────────────┘

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

// List array
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

// Use EJS as view engine
app.set("view engine", "ejs");

// Use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Use styles.css
app.use(express.static("public"));

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
    res.render("list", {listTitle: day, newListItems: items})
});

app.post("/", function(req, res){
    
    const item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        // Re-render work list
        res.redirect("/work");
    }else{
        items.push(item);
        // Send back to home page (to re-render)
        res.redirect("/");
    }

    items.push(item);

    // Send back to home page (to re-render)
    res.redirect("/");
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(port, function(){
    console.log("Server started on port " + port);
});