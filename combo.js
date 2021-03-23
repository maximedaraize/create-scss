const inquirer = require("inquirer");
const fs = require("fs-extra");
const path = require("path");
const glob = require("glob");

let ascii = `
 a88888b.  888888ba   88888888b  .d888888  d888888P  88888888b    .d88888b   a88888b. .d88888b  .d88888b  
d8'    88  88     8b  88        d8'    88     88     88           88.    "' d8'    88 88.    "' 88.    "' 
88        a88aaaa8P' a88aaaa    88aaaaa88a    88    a88aaaa        Y88888b. 88         Y88888b.  Y88888b. 
88         88    8b.  88        88     88     88     88                  8b 88               8b        8b 
Y8.   .88  88     88  88        88     88     88     88           d8'   .8P Y8.   .88 d8'   .8P d8'   .8P 
 Y88888P'  dP     dP  88888888P 88     88     dP     88888888P     Y88888P   Y88888P'  Y88888P   Y88888P  
oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo                                                                      
 `;

inquirer
  .prompt([
    {
      name: "scss_path",
      type: "input",
      message: "Where would you like to add the scss directory? (Press enter for root)",
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
      try {
        await 
        fs.copy("node_modules/create-scss/scss", `${answer.scss_path}/scss`, {
          overwrite: false,
          errorOnExist: true,
        });
        console.log(
          "\x1b[32m",
          "Awesome! A new scss folder was added to your project. You are now ready to code something beautiful"
        );
        if (answer.scss_structure == "blank") {
          glob(`${answer.scss_path}/scss/**/_*.scss`, {}, (err, files) => {
            files.forEach(function (item) {
              fs.writeFile(item, "");
            });
          });
          // Remove selected folder from create-scss
        } else if (answer.scss_structure == "custom") {
          let folders = answer.folder;
          folders.forEach(function (item) {
            fs.rm(answer.scss_path + "/scss/" + item, { recursive: true });
          });
          console.log(folders)
        }        
        return true;
      } catch (error) {
        if (error.message.includes("already exists")) {
          console.log(
            "\x1b[36m",
            "scss folder already exist. Complementary files were added to it. Happy coding"
          );
          return false;
        }
        throw error;
      }
    }
    console.log(
      "\x1b[35m",
      ascii,
      "\x1b[37m",
      ` \n 🎉 Thank you for using create-scss \n 🌎 Website:`,
      "\x1b[36m", `https://create-scss.com`
    );
      copyFiles();
  });