const fs = require("fs-extra");

// Async/Await:
async function copyFiles() {
  try {
    await fs.copy("scss", "sass");
    await fs.copy("helper/package.json", "package.json");
    console.log(
      "\x1b[45m",
      "Awesome, it worked! You are now ready to code something beautiful"
    );
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
