const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: function(answer) {
      if (answer.length < 1) {
        return console.log("You must enter a title!");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please, enter a small description of your project. (Required)",
    default: "Project Description",
    validate: function(answer) {
      if (answer.length < 1) { 
        return console.log("Please enter a description.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "installation",
    message: "If applicable, provide installation instructions. If not, press Enter to skip.",
    validate:  function(answer){
      if (answer  === ""){
          return ("n/a");
          } else {
            return true;
      }
    },
  },
  {
    type:"input",
    name:"usage",
    message: "Please provide usage information."
  },
  {
    type:"list",
    name:"license",
    message: "Choose a license for your application: ",
    choices:[
      "Apache License 2.0",
      "BSD 2-Clause \"Simplified\" or \"FreeSoftware\" License",
      "GNU General Public License v3.0",
      "GPLv2",
      "MIT License",
      "Mozilla Public License Version 2.0"
    ],
  },
  {
    type:"input",
    name:"contributing",
    message:"Provide guidelines for contributors. Include any specific requirements they should follow in their contributions such as testing requirements or code examples."
  },
  {
    type:"input",
    name:"tests",
    message: "Provide any tests for your application and how to run them."
  },
  {
    type:"input",
    name:"questions",
    message: "Add your contact information (email address) so users can ask questions."
  },
  {
    type:"input",
    name:"username",
    message: "Add your GitHub username."
  },
  {
    type:"input",
    name:"repo",
    message: "Add the name of your GitHub repository."
  },
];

// function to write README file
function writeToFile(data) {
  const outputDir  = path.join(__dirname, 'output');
  const fileName = path.join(outputDir, 'README.md');

  if  (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }

  fs.writeFileSync(fileName, data);
}

// function to initialize program
const init = async() => {
  console.log("Hi! Let's create your README file.");
  try{
    const answers = await inquirer.prompt(questions);
    // use the generateMarkdown function in utils/generateMarkdown to create markdown from user input
    const readMeContent = generateMarkdown(answers);
    // write the content to a new file named 'README.md'
    writeToFile(readMeContent);
    console.log('Your README.md has been created successfully!');
  } catch (err) {
    console.log(err);
  };
};

// function call to initialize program
init();