

-- Drops the task_saver_db if it already exists --
DROP DATABASE IF EXISTS coursecatalog_db;

create database coursecatalog_db;

use coursecatalog_db;

-- drop table  IF EXISTS students; 

-- create table students (
-- STUDENT_ID int NOT NULL AUTO_INCREMENT,
-- FIRST_NAME varchar(255) NOT NULL,
-- MIDDLE_NAME varchar(255)  NULL,
-- LAST_NAME varchar(255) NOT NULL,
-- PHONE varchar(15) NOT NULL,
-- LOGIN_NAME varchar(25) NOT NULL,
-- PRIMARY KEY (STUDENT_ID)
-- );

-- drop table  IF EXISTS instructors; 
-- create table instructors (
-- INSTRUCTOR_ID int NOT NULL AUTO_INCREMENT,
-- FIRST_NAME varchar(255) NOT NULL,
-- MIDDLE_NAME varchar(255)  NULL,
-- LAST_NAME varchar(255) NOT NULL,
-- PHONE varchar(15) NOT NULL,
-- LOGIN_NAME varchar(25) NOT NULL,
-- INSTRUCTOR_RATING int NULL default 0,
-- PRIMARY KEY (INSTRUCTOR_ID)
-- );

-- drop table  IF EXISTS courses;
-- create table courses (
-- COURSE_ID int NOT NULL AUTO_INCREMENT,
-- COURSE_NAME varchar(255) NOT NULL,
-- COURSE_START_DATE date NOT NULL,
-- COURSE_END_DATE date NOT NULL,
-- COURSE_CREDITS int NOT NULL default 0,
-- INSTRUCTOR_ID  int NOT NULL,
--  FOREIGN KEY (INSTRUCTOR_ID) REFERENCES instructors(INSTRUCTOR_ID),
-- PRIMARY KEY (COURSE_ID)
-- );

-- drop table  IF EXISTS student_enrollments;
-- create table student_enrollments (
-- STUDENT_ID int NOT NULL,
-- COURSE_ID int NOT NULL,
-- FOREIGN KEY (STUDENT_ID) REFERENCES students(STUDENT_ID),
-- FOREIGN KEY (COURSE_ID) REFERENCES courses(COURSE_ID),
-- STUDENT_CREDITS int NOT NULL default 0,
-- COURSE_RATING int NOT NULL default 0
-- );



