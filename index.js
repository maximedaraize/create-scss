const fs = require("fs-extra");

// Async/Await:
async function copyFiles() {
  try {
    await fs.copy("scss", "../../scss");
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
