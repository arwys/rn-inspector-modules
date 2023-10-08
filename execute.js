const {exec} = require('child_process');

function executeCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
  });
}
module.exports = executeCommand;
