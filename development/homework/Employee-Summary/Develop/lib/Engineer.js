const Employee = require ("../lib/Employee.js");
// TO DO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
    constructor(name, id, email, github, role){
        super(name, id, email, github, role);
        this.github = github;
    }
}

module.exports = Engineer