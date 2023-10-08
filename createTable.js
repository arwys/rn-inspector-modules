const fs = require('fs');
const path = require('path');
const Table = require('cli-table');
const getPackage = require('./getPackage');
const formatSize = require('./formatSize');
const getDirectorySize = require('./getDirectorySize');

// Function to get the size of a directory (including subdirectories)

const currentDirectory = process.cwd();
const projectDirectory = path.join(currentDirectory, '..');

// Path to your project's node_modules directory

// Get a list of modules within node_modules
const modules = fs.readdirSync(projectDirectory);

// Create a table for displaying the sizes
const table = new Table({
  head: ['Module', 'Size'],
  colWidths: [30, 20],
});

// Calculate and display the size of each module
let totalSize = 0;

async function createTable(arg) {
  const module = arg ? await getPackage(arg) : modules;

  module.forEach(moduleName => {
    const modulePath = path.join(projectDirectory, moduleName);

    try {
      const moduleSize = getDirectorySize(modulePath);
      table.push([moduleName, formatSize(moduleSize)]);
      totalSize += moduleSize;
    } catch (error) {
      console.error(
        `Error calculating size for module ${moduleName}: ${error.message}`,
      );
    }
  });
  // }
  console.log(table.toString());
  console.log(`Total size of all modules: ${formatSize(totalSize)}`);
  // });
}

module.exports = createTable;
