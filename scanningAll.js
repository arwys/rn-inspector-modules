const fs = require('fs');
const path = require('path');
const Table = require('cli-table');
const getPackage = require('./getPackage');
const formatSize = require('./formatSize');
const getDirectorySize = require('./getDirectorySize');
const {  projectDirectory } = require('./config');



const modules = fs.readdirSync(projectDirectory);

const table = new Table({
  head: ['Module', 'Size'],
  colWidths: [30, 20],
});

async function getModule() {
  let obj = {};

  const res = await getPackage.then((response, err) => {
    if (err) {
      console.error('scanning package is failed');
      return;
    }

    if (response) {
      modules
        // .filter(elem => response.includes(elem)
        .forEach(moduleName => {
          const modulePath = path.join(projectDirectory, moduleName);
          if (moduleName === '.yarn-integrity') {
            return;
          }

          try {
            const moduleSize = getDirectorySize(modulePath);
            table.push([moduleName, formatSize(moduleSize)]);
            obj[moduleName.toString()] = formatSize(moduleSize);
          } catch (error) {
            console.error(
              `Error calculating size for module ${moduleName}: ${error.message}`,
            );
          }
        });
    }

    return obj;
  });
  return res;
}
async function scanModule() {
  const response = await getModule();
  if(response){
    return response;
  }
}

module.exports = scanModule;
