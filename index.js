const fs = require("fs-extra");

// Async/Await:
async function copyFiles() {
  try {
    await fs.copy("scss", "../../sass");
    console.log("success!");
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
