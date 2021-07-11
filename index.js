const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const generateHTML = require(./src)

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter team manager's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter team manager's id: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your manager's id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter team Manager's email address: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your Managers's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Enter office number: ",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((manager) => {
      //store manager data
      continueOrNot();
    });
};

const continueOrNot = () => {
  // prompt of they want to add more employees
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "Would you like to add more employees?",
      choices: ["Yes", "No"],
    })
    .then((res) => {
      switch (res.choice) {
        case "Yes":
          employeeType();
          break;
        case "No":
          // build team
          break;
        default:
          console.log("An error has occured!");
      }
    });
};

const employeeType = () => {
  // prompt employee type
  inquirer
    .prompt({
      type: "list",
      name: "type",
      message: "What type of employee would you like to add?",
      choices: ["Engineer", "Intern"],
    })
    .then((res) => {
      switch (res.type) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          console.log("An error has occured!");
      }
    });
};

const createEngineer = () => {
  // Engineer prompts
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Engineer's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter team Engineer's id: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your Engineer's id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter team Engineer's email address: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your Engineer's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter GitHub username: ",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
    ])
    .then((engineer) => {
      //store engineer data
      continueOrNot();
    });
};

const createIntern = () => {
  // Intern prompts
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter team Intern's name: ",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter team Intern's id: ",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your Intern's id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter team Intern's email address: ",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your Intern's email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter school name: ",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter your school name!");
            return false;
          }
        },
      },
    ])
    .then((intern) => {
      //store intern data
      continueOrNot();
    });
};

createManager();
