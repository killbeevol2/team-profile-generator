const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/template");
const employees = [];

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
          const check = emailInput.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
          if (check) {
            return true;
          } else {
            console.log("\nPlease enter a valid email address!");
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
      const boss = new Manager(
        manager.name,
        manager.id,
        manager.email,
        manager.office
      );
      employees.push(boss);
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
          buildTeam();
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
          const check = emailInput.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
          if (check) {
            return true;
          } else {
            console.log("\nPlease enter a valid email address!");
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
      const worker = new Engineer(
        engineer.name,
        engineer.id,
        engineer.email,
        engineer.github
      );
      employees.push(worker);
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
          const check = emailInput.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
          if (check) {
            return true;
          } else {
            console.log("\nPlease enter a valid email address!");
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
      const worker = new Intern(
        intern.name,
        intern.id,
        intern.email,
        intern.school
      );
      employees.push(worker);
      continueOrNot();
    });
};

createManager();
const buildTeam = () => {
  const html = generateHTML(employees);
  writeHtml(html);
};

const writeHtml = (html) => {
  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) throw err;
    console.log("Congrats! You've built your team!!");
  });
};
