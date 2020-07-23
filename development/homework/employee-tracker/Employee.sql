DROP DATABASE IF EXISTS employeeMoniter_db;

CREATE DATABASE employeeMoniter_db; 

USE employeeMoniter_db; 

CREATE TABLE department(

id INT AUTO_INCREMENT,

name VARCHAR(50) NOT NULL, 

PRIMARY KEY (id)

);  
