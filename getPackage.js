const fs = require('fs');
const path = require('path');
const { currentDirectory, pkgJson } = require('./config');

const projectDirectory = path.join(currentDirectory, '..', '..');

function getPackage(arg) {
  return new Promise((resolve, reject) => {
      const pkgJson = path.join(projectDirectory, 'package.json');
    if (fs.existsSync(pkgJson)) {
      const packageJsonContent = fs.readFileSync(pkgJson, 'utf8'); // reading buffer package.json
      const parsedJson = JSON.parse(packageJsonContent);
      if (parsedJson) {
        if (parsedJson[arg]) {
          const data = Object.keys(parsedJson[arg]);
          resolve(data);
        } else {
          resolve([]);
        }
      } else {
        resolve([]);
      }
    } else {
      reject('Error Finding Dependencies');
      console.error(
        'package.json file does not exist., not in the correct path',
      );
    }
  });
}

// module.exports = getPackageJsonDependencies;
module.exports = getPackage;
