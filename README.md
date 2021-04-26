# todolist-v1

### References

### Topics

### Notes

### Steps Used Building App

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