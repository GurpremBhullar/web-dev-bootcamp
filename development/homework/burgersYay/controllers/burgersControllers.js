var express = require("express");

var router = express.Router();

var cat = require("../models/burgers.js");


router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.create([
    "name", "indianVeg"
  ], [
    req.body.name, req.body.indianVeg
  ], function(result) {
   
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    indianVeg: req.body.indianVeg
  }, condition, function(result) {
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
