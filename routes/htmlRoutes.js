/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/index", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Classy!",
        subtitle: "Where students & tutors unite!",
        examples: dbExamples
      });
    });
  });

  // Load index page
  app.get("/login", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("login", {
        msg: "Classy!",
        subtitle: "Where students & tutors unite!",
        examples: dbExamples
      });
    });
  });

  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("home", {
        msg: "Classy!",
        subtitle: "Where students & tutors unite!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Get student by login name
  app.post("/login", function(req, res) {
    db.Student.findOne({ where: { login_name: req.params.login_name } }).then(
      function(dbExample) {
        console.log("login in the post = " + req.params.login_name);
        res.render("example", {
          example: dbExample
        });
      }
    );
  });

  app.get("/newstudent", function(req, res) {
    db.Student.findAll({}).then(function(dbExamples) {
      res.render("newstudent", {
        msg: "Classy!",
        subtitle: "Where students & tutors unite!",
        examples: dbExamples
      });
    });
    console.log("test -- ");
  });

  app.get("/newinstructor", function(req, res) {
    db.Student.findAll({}).then(function(dbExamples) {
      res.render("newinstructor", {
        msg: "Classy!",
        subtitle: "Where students & tutors unite!",
        examples: dbExamples
      });
    });
    console.log("test -- ");
  });

  app.get("/add", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("add", {
        msg: "Classy!",
        subtitle: "Where students & tutors unite!",
        examples: dbExamples
      });
    });
  });
  app.get("/cart", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("cart", {
        msg: "Classy!",
        subtitle: "Where students & tutors unite!",
        examples: dbExamples
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
