//Copy the scss folder to the root of the prokect when install by NPM
//Copy a starter package.json from helper to the root of project when install by NPM

const fs = require('fs-extra');

// Async/Await:
async function copyFiles() {
  try {
    await fs.copy('scss', '../../scss', {
      overwrite: false,
      errorOnExist: true,
    });
    console.log(
      '\x1b[32m',
      'Awesome! A new scss folder was added to your project. You are now ready to code something beautiful'
    );
    return true;
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log(
        '\x1b[36m',
        'scss folder already exist. Complementary files were added to it. Happy coding'
      );
      return false;
    }
    throw error;
  }
}

copyFiles();

// Adding commands to script key in package.json at root level of project
const saveFile = require('fs').writeFileSync;
const pkgJsonPath =
  require.main.paths[0].split('node_modules')[0] + 'package.json';
const json = require(pkgJsonPath);

if (!json.hasOwnProperty('scripts')) {
  json.scripts = {};
}

json.scripts['cs-watch'] = 'sass scss/main.scss css/style.css --watch --no-source-map';
json.scripts['cs-compile'] = 'sass scss/main.scss css/style.css --no-source-map';
json.scripts['cs-compress'] = 'sass scss/main.scss css/style.css --style=compressed --no-source-map';
json.scripts['cs-prefix'] = "postcss css/style.css -o css/style.css --use autoprefixer -b 'last 4 versions' --no-source-map";
json.scripts['cs-build'] = 'npm-run-all cs-compile cs-compress cs-prefix';
saveFile(pkgJsonPath, JSON.stringify(json, null, 2));
