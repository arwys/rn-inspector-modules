const findModuleForCli = require('./findModuleForCli');

function displayDevDependencies() {
  findModuleForCli('devDependencies');
}
displayDevDependencies();
