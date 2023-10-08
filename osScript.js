const {exec} = require('child_process');
const scanModule = require('./scanningDev');
const getCommand = require('./getCommand');
const printMessage = require('./printMessage');

async function run() {
  const res = await scanModule();
  const response = Object.keys(res).length !== 0;
  const message = getCommand(res);

  if (response) {
    const msg = printMessage(message);
    await exec(msg, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error}`);
        return;
      }
    });
  }
}

run();
