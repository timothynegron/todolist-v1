# todolist-v1

### References

1. [EJS Get Started](https://ejs.co/)

### Topics

1. Templates
2. Using EJS with Express

### Notes

* Templates helps us write less code.
* When HTML pages are similar we can use Templates to help us write less code.
* There are many template tools.

### Steps

Adding EJS to project

### `Step 1`

Install EJS module

```shell
npm i ejs
```

### `Step 2`

Set view engine to EJS

```javascript
app.set("view engine", "ejs");
```

### `Step3`

Create a views folder and add .ejs file(s)

### `Step 4`

Add markers to .ejs file(s)

```html
<%=[marker name here]%>
```

### `Step 5`

Add res.render()

```javascript
app.get("/", function(req, res){
    const today = new Date();
    const currentDay = today.getDay();
    const day = "";

    if(currentDay === 6 || currentDay === 0){
        day = "Weekend"
    }
    else{
        day = "Weekday"
    }

    res.render("list", {kindOfDay: day})
});
```

### Express Template

```javascript
const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.send("Hello");
});

app.listen(port, function(){
    console.log("Server started on port " + port);
});
```