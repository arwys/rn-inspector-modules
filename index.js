const fs = require('fs');
const path = require('path');
const { projectDirectory, pkgJson } = require('./config');



// Function to detect Node modules in the project directory
function detectNodeModules() {
  const nodeModulesPath = projectDirectory

  if (fs.existsSync(pkgJson)) {
    // You can read and work with the package.json file here
    const packageJsonContent = fs.readFileSync(pkgJson, 'utf8');
    console.log('Contents of package.json:');
    const parseJson = JSON.parse(packageJsonContent);
    console.log(parseJson.dependencies);
  } else {
    console.error('package.json file does not exist.');
  }

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
      nodeModulesList.forEach(module => console.log(`- ${module}`));
    }
  });
}

// Run the Node module detection function
detectNodeModules();
