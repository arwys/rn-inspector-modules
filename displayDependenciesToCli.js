const findModuleForCli = require('./findModuleForCli');

function displayDependencies() {
  findModuleForCli('dependencies');
}
displayDependencies();
