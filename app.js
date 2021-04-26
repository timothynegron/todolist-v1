const express = require("express")
const bodyParser = require("body-parser")

const port = 3000;

const app = express();

// Use EJS as view engine
app.set("view engine", "ejs");

app.get("/", function(req, res){
    const today = new Date();
    const currentDay = today.getDay();
    let day = "";

    const days = 
    [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ]

    res.render("list", {kindOfDay: days[currentDay] + "!"})
});

app.listen(port, function(){
    console.log("Server started on port " + port);
});