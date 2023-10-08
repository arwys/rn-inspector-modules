const fs = require('fs');
const path = require('path');
const getPackage = require('./getPackage');

const currentDirectory = process.cwd();
const projectDirectory = path.join(currentDirectory, '..');

function detectNodeModules() {
  const nodeModulesPath = path.join(projectDirectory, 'node_modules');

  getPackage().then((response, error) => {
    if (error) {
      throw error;
    }
    if (response) {
      fs.readdir(nodeModulesPath, (err, files) => {
        if (err) {
          console.error('Error reading node_modules directory:', err);
          return;
        }

        const nodeModulesList = files.filter(file =>
          fs.statSync(path.join(nodeModulesPath, file)).isDirectory(),
        );

        if (nodeModulesList.length === 0) {
          console.log('No Node modules found in the project.');
        } else {
          console.log('Node modules detected in the project:');
          nodeModulesList
            .filter(i => response.includes(i))
            .forEach(module => console.log(`- ${module}`));
        }
      });
    }
  });
}

detectNodeModules();
