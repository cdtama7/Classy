/* eslint-disable camelcase */
// Get references to page elements
var $exampleText = $("#course-name");
var $exampleDescription = $("#course-description");
var $submitBtn = $("#submit");

//Student form details
var $studentFirstNameText = $("#student-fname");
var $studentMiddleNameText = $("#student-mname");
var $studentLastNameText = $("#student-lname");
var $studentLoginText = $("#student-login");
var $studentPhone = $("#student-phone");
var $studentRegisterBtn = $("#studentregister");

//Instructor form details
var $instructorFirstNameText = $("#instructor-fname");
var $instructorMiddleNameText = $("#instructor-mname");
var $instructorLastNameText = $("#instructor-lname");
var $instructorLoginText = $("#instructor-login");
var $instructorPhone = $("#instructor-phone");
var $instructorRegisterBtn = $("#instructorregister");

//Validate Login form details

var $loginUser = $("#login_name");
var $loginPhone = $("#login-phone");
var $loginuserBtn = $("#loginuser");

var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    console.log(example);
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  // new student registration
  saveNewStudent: function(example) {
    console.log(example);
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/newstudent",
      data: JSON.stringify(example)
    });
  },
  // new instructor registration
  saveNewInstructor: function(example) {
    console.log(example);
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/newinstructor",
      data: JSON.stringify(example)
    });
  },
  getLogin: function(login_name) {
    console.log("inside getLogin - $loginUser = " + login_name);
    return $.ajax({
      url: "api/login/" + login_name,
      type: "GET"
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// new student registration form validation
var handleStudentRegSubmit = function(event) {
  event.preventDefault();

  var newStudent = {
    first_name: $studentFirstNameText.val().trim(),
    middle_name: $studentMiddleNameText.val().trim(),
    last_name: $studentLastNameText.val().trim(),
    login_name: $studentLoginText.val().trim(),
    phone: $studentPhone.val().trim()
  };

  if (
    !(
      newStudent.first_name &&
      newStudent.last_name &&
      newStudent.login_name &&
      newStudent.phone
    )
  ) {
    alert(
      "You must enter Student's first name, last name, login name and phone to register!"
    );
    return;
  }

  API.saveNewStudent(newStudent).then(function() {
    refreshExamples();
  });

  $studentFirstNameText.val("");
  $studentMiddleNameText.val("");
  $studentLastNameText.val("");
  $studentLoginText.val("");
  $studentPhone.val("");
};

// new instructor registration form validation
var handleInstructorRegSubmit = function(event) {
  event.preventDefault();

  var newInstructor = {
    first_name: $instructorFirstNameText.val().trim(),
    middle_name: $instructorMiddleNameText.val().trim(),
    last_name: $instructorLastNameText.val().trim(),
    login_name: $instructorLoginText.val().trim(),
    phone: $instructorPhone.val().trim()
  };

  if (
    !(
      newInstructor.first_name &&
      newInstructor.last_name &&
      newInstructor.login_name &&
      newInstructor.phone
    )
  ) {
    alert(
      "You must enter Instructors's first name, last name, login name and phone to register!"
    );
    return;
  }

  API.saveNewInstructor(newInstructor).then(function() {
    refreshExamples();
  });

  $instructorFirstNameText.val("");
  $instructorMiddleNameText.val("");
  $instructorLastNameText.val("");
  $instructorLoginText.val("");
  $instructorPhone.val("");
};

// get instructor / student

// var $loginUser = $("#login_name");
// var $loginPhone = $("#login-phone");
// var $loginuserBtn = $("#loginuser");
// new instructor registration form validation
var handleLogins = function(event) {
  event.preventDefault();

  var newLogin = {
    login_name: $loginUser.val().trim(),
    loginPhone: $loginPhone.val().trim()
  };

  if (!(newLogin.login_name && newLogin.loginPhone)) {
    alert(
      "You must enter valid login user name and phone to login to the site!"
    );
    return;
  }
  console.log("$loginUser 1 = " + newLogin.login_name);
  var idToValidate = newLogin.login_name;
  console.log("$loginUser 2 = " + newLogin.login_name);
  API.getLogin(idToValidate).then(function(value) {
    console.log("$loginUser 3 = " + value);
    window.location.replace("/index");
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);

// new student and instructor registrations - on click of registration
$studentRegisterBtn.on("click", handleStudentRegSubmit);
$instructorRegisterBtn.on("click", handleInstructorRegSubmit);
$loginuserBtn.on("click", handleLogins);

$exampleList.on("click", ".delete", handleDeleteBtnClick);
