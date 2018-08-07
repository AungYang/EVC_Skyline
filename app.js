var express = require("express")
var app = express();


app.set("view engine", "ejs");  // view engine



app.get("/", function(req, res){
  res.render("index");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("==> Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
