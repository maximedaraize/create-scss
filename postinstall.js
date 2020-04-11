const fs = require("fs-extra");

// Async/Await:
async function copyFiles() {
  try {
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
