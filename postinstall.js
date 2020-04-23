//Copy the scss folder to the root of the prokect when install by NPM
//Copy a starter package.json from helper to the root of project when install by NPM

const fs = require("fs-extra");

// Async/Await:
async function copyFiles() {
  try {
    await fs.copy("helper/package.json", "../../package.json");
    await fs.copy("scss", "../../scss");
    console.log(
      "\x1b[45m",
      "Awesome, it worked! You are now ready to code something beautiful"
    );
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
