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

json.scripts['cs-watch'] = 'sass scss/main.scss css/style.css --watch';
json.scripts['cs-compile'] = 'sass scss/main.scss css/style.comp.css';
json.scripts['cs-prefix'] =
  "postcss css/style.comp.css --use autoprefixer -b 'last 4 versions' -o css/style.prefix.css";
json.scripts['cs-compress'] =
  'sass css/style.prefix.css css/style.mini.css --output-style compressed';
json.scripts['cs-build'] = 'npm-run-all cs-compile cs-prefix cs-compress';
saveFile(pkgJsonPath, JSON.stringify(json, null, 2));
