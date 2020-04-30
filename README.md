<img src="./public/styles/project2design.png" width="70" height="70" style="float: left; margin-right: 7px"/>

## [Link to Project](https://teamfour.herokuapp.com/)

# Classy - Where students & tutors unite

<br>
<p>
Classy is a typical market place web application where buy and sell takes place.
<br >
<p>

## Overview and flow:

<p>
<b>
This application consists of three main entities which are Students, Instructors and Courses.
</b>
<br>
*   Students can purchase and enroll into courses offered by Instructors and can rate each course or an instructor.
<br>
*   Instructors can offer new courses or edit existing courses and can decide the course credits for each offered course.
<br>
*   Courses have specific start and end dates, which offeres specific course credits depending on the course duration.
<br>
*   Depending on Students ratings for course or for the instructor, the popularity / demand grows for the course or for the instructor. Top rated courses or top rated instructors were shown on the home page.
<br> <br>

<p>
<img src="./public/styles/ClassyMain.JPG" width="650" height="300"/>

<br>

## Database tables, columns and how the tables are connected

<br>
<img src="./public/styles/Classy_DBTables.JPG" width="650" height="300"/>
<br>

### Actions performed by Student

<br>
<img src="./public/styles/ClassyStudent.JPG" width="650" height="300"/>
<br>

#### New Students Registration form:

To start with, students can register as new users by navigating to the "Register as a new student" button and provide the below details for registration.

- Name (first name, middle name, last name)
- Phone
- Login Name (unique name to login to the application after the registration)

If user has not provided any of the above listed fields, an error message is shown prompting the user to enter these fields.
<br>
A quick preview of the user registration is shown below.

[![new-student-registration](./public/styles/student-registration.gif)](student-registration.gif)

### Actions performed by Instructor

<br>
<img src="./public/styles/ClassyInstructor.JPG" width="650" height="300"/>
<br>

#### New Instructors Registration form:

Instructors can register as new users by navigating to the "Register as a new instructor" button and provide the below details for registration.

- Name (first name, middle name, last name)
- Phone
- Login Name (unique name to login to the application after the registration)

If user has not provided any of the above listed fields, an error message is shown prompting the user to enter these fields.
<br>
A quick preview of the user registration is shown below.

[![new-instructor-registration](./public/styles/instructor-registration.gif)](instructor-registration.gif)

#### Instructors adding new courses:

Instructors can add new courses by navigating to "Teach a class".
<br>
<img src="./public/styles/ClassyNewCourses.JPG" width="650" height="300"/>
<br>

#### Technology used:

- Node and Express Web Server
- MySQL Database with a Sequelize ORM
- Handlebars for templates
- GET and POST routes for retrieving and adding new data
- Follwed MVC Paradigm
- Deployed in Heroku

<br>

### Original Contributors:

- Carlos De Castro
- Kiran Kesari
- Eric Pinder

### Future Development:

- Login Page to check for valid user name
- Maintain the table dependencies among (Students, Courses, Student Enrollments) and also among (Instructors, Courses, Student Enrollments)
- Instructors to have the abitlity to update and delete courses
- Students to have the abitlity to un-enroll the courses, if the courses have not started yet
- Maintain a flow, enhance the navigation reaching to each page
