const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project's title?",
    },
    {
      type: "input",
      name: "instructions",
      message: "Please enter instructions for your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage information for your project.",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Please enter information on how someone can contribute to your project.",
    },
    {
      type: "input",
      name: "testInstructions",
      message: "Please enter information on how someone can test your program.",
    },
    {
      type: "checkbox",
      name: "license",
      choices: [
        "Apache License 2.0",
        "GNU GPLv3",
        "ISC License",
        "MIT License",
      ],
      message: "Please select the license type for your project.",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address",
    },
  ])
  .then((data) => {
    const filename = `./CreatedREADMEs/${projectTitle}_README.md`;
    fs.writeFile(filename, ``, (err) =>
      err ? console.log(err) : console.log("Success!!")
    );
  });
