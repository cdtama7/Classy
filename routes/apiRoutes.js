/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new student
  app.post("/api/newstudent", function(req, res) {
    db.Student.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Create a new instructor
  app.post("/api/newinstructor", function(req, res) {
    db.Instructor.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  // Get student by login name
  app.get("/api/login/:login_name", function(req, res) {
    db.Student.findOne({ where: { login_name: req.params.login_name } }).then(
      function(dbExamples) {
        console.log("login in the get = " + req.params.login_name);
        // res.json(dbExamples);
        res.redirect("/index");
        // res.render("index", {
        //   msg: "Classy!",
        //   subtitle: "Where students & tutors unite!",
        //   examples: dbExamples
        // });
        console.log("after ");
      }
    );
  });

  // Get instructor by login name
  app.get("/api/login/:login_name", function(req, res) {
    db.Instructor.findOne({
      where: { login_name: req.params.login_name }
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
