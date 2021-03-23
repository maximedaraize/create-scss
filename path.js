const inquirer = require("inquirer");
const fs = require("fs-extra");

inquirer
  .prompt([
    {
      name: "scss_path",
      type: "input",
      message: "Where would you like to add the scss directory? (Press enter for root)",
      default: "./",
    },
  ])
  .then((answer) => {
    async function copyFiles() {
      try {
        await fs.copy("scss", `${answer.scss_path}/scss`, {
          overwrite: false,
          errorOnExist: true,
        });
        console.log(
          "\x1b[32m",
          "Awesome! A new scss folder was added to your project. You are now ready to code something beautiful"
        );
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

    copyFiles();
  });