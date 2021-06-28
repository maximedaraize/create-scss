const inquirer = require("inquirer");
const fs = require("fs-extra");


inquirer
  .prompt([
    {
      name: "scss_path",
      type: "input",
      message:
        "Where would you like to add the scss directory? (Press enter for root)",
      default: "./",
    },
    {
      name: "scss_structure",
      type: "list",
      message: "What structure would you like?",
      choices: ["default", "blank", "custom"],
    },
    {
      name: "folder",
      type: "checkbox",
      message: "Which folder would you like to remove",
      choices: [
        "abstracts",
        "base",
        "components",
        "layout",
        "pages",
        "themes",
        "vendor",
      ],
      when: function (answer) {
        // Only run if user answered "custom" to the first prompt
        return answer.scss_structure === "custom";
      },
    },
  ])
  .then((answer) => {
    async function copyFiles() {
      console.log(ok)
    }
    
    copyFiles();
  });

  