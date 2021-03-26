const inquirer = require("inquirer");
const fs = require("fs-extra");
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
      try {
        await fs.copy(
          "node_modules/create-scss/scss",
          `${answer.scss_path}/scss`,
          {
            overwrite: false,
            errorOnExist: true,
          }
        );
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
            fs.readFile(
              "text.txt",
              { encoding: "utf-8" },
              function (err, data) {
                if (err) throw error;

                let dataArray = data.split("\n"); // convert file data in an array
                let searchKeyword = Object.values(answer.folder); // we are looking for a line, contains, key word choose by the user
                let searchKeywords = Object.values(answer.folder); // we are looking for a line, contains, key word choose by the user
                // let lastIndex = -1; // let say, we have not found the keyword

                //create array of regex
                //Add /string/i for each value
                for(var i=0;i<searchKeywords.length;i++){
                    searchKeywords[i] = `/${searchKeywords[i]}/i`;
                }
                console.log(searchKeywords)

                let result = dataArray.filter(function (dataItem) { //fonction trouver le moyen de convertir array searchWords en array de regex (retirer les quotes)
                  return !searchKeywords.some(function (regex) {
                             return regex.test(dataItem);
                        });
                });
              console.log(result)

                // UPDATE FILE WITH NEW DATA
                let updateFile = result.join("\n");
                fs.writeFile("text.txt", updateFile, (err) => {
                  if (err) throw err;
                  console.log("Successfully updated the file data");
                });

                // for (let index = 0; index < dataArray.length; index++) {
                //   if (dataArray[index].includes(searchKeyword)) {
                //     // check if a line contains the 'user1' keyword
                //     dataArray.splice(lastIndex, 1); // remove the keyword 'user1' from the data Array
                //     const updatedData = dataArray.join("\n");
                //   }
                // }
              }
            );
          });
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
      "\x1b[36m",
      `https://create-scss.com`
    );
    copyFiles();

    // Add script to package.json to compile scss
    const saveFile = require("fs").writeFileSync;
    const pkgJsonPath =
      require.main.paths[0].split("node_modules")[0] + "package.json";
    const json = require(pkgJsonPath);
    console.log("check->" + pkgJsonPath);
    let slash = "/";
    if (!json.hasOwnProperty("scripts")) {
      json.scripts = {};
    }

    if (answer.scss_path.endsWith("./")) {
      answer.scss_path = "";
      slash = "";
    } else if (answer.scss_path.endsWith("/")) {
      slash = "";
    }

    json.scripts[ "cs-watch"    ] = `sass ${answer.scss_path}${slash}scss/main.scss ${answer.scss_path}${slash}css/style.css --watch`;
    json.scripts["cs-build"] = `sass ${answer.scss_path}${slash}scss/main.scss ${answer.scss_path}${slash}css/style.css --style=compressed --no-source-map && postcss ${answer.scss_path}${slash}css/style.css -o ${answer.scss_path}${slash}css/style.css --use autoprefixer -b 'last 4 versions'`;
    saveFile(pkgJsonPath, JSON.stringify(json, null, 2));
  });
