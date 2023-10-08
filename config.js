const path = require('path')

const currentDirectory = process.cwd();
const projectDirectory = path.join(currentDirectory, '..');
const node_modules_inside =  path.join(projectDirectory, 'node_modules');
const pkgJson = path.join(projectDirectory, 'package.json');

module.exports = {currentDirectory,projectDirectory,node_modules_inside,pkgJson}