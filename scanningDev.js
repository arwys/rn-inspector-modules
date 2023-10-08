const fs = require('fs');
const path = require('path');
const getPackage = require('./getPackage');
const formatSize = require('./formatSize');
const getDirectorySize = require('./getDirectorySize');

// Function to get the size of a directory (including subdirectories)

const currentDirectory = process.cwd();
const projectDirectory = path.join(currentDirectory, '..');

const nodeModulesPath = path.join(projectDirectory, 'node_modules');

const modules = fs.readdirSync(nodeModulesPath);

async function getModule() {
  let obj = {};

  const res = await getPackage('dependencies').then((response, err) => {
    if (err) {
      console.error('scanning package is failed');
      return;
    }

    if (response) {
      modules
        .filter(elem => response.includes(elem))
        .forEach(moduleName => {
          const modulePath = path.join(nodeModulesPath, moduleName);
          if (moduleName === '.yarn-integrity') {
            return;
          }

          try {
            const moduleSize = getDirectorySize(modulePath);
            obj[moduleName.toString()] = formatSize(moduleSize);
          } catch (error) {
            console.error(
              `Error calculating size for module ${moduleName}: ${error.message}`,
            );
          }
        });
    }

    return obj;
  }).catch(err=>console.log(err))
  return res;
}
async function scanModule() {
  const response = await getModule();
  return response;
}

module.exports = scanModule;
