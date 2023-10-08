const filterModule = require('./filterModule');

async function scanModule(arg) {
try {
    const response = await filterModule('devDependencies');
  return response;
} catch (error) {
  console.error(error)
}
}

module.exports = scanModule;
