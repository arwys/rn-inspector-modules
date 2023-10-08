const getCommand = require('./getCommand');
const scanModule = require('./filterModule');

async function getModuleDependencies() {
  const response = await scanModule('devDependencies');
  const res = getCommand(response);
  console.log(res);
}
getModuleDependencies();
