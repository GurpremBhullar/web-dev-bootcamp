var express = require("express") 
var path = require("path") 

var gurprem = express() 
var PORT = process.env.PORT || 3000 

gurprem.use(express.urlencoded({ extended: true }));
gurprem.use(express.json());  

gurprem.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

gurprem.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

gurprem.get("/api/notes",function(req, res) {
  res.sendFile(path.join(__dirname, "db.json" ));
});

gurprem.get("/api/notes/:id", function(req, res) {
  let savedNotes = JSON.parse(fs.readFileSync("db.json", "utf8"));
  res.json(savedNotes[Number(req.params.id)]);

});
gurprem.listen(PORT, function() {
    console.log("listening on PORT " + PORT);
  });
  