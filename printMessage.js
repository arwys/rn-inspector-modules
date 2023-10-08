const os = require('os');

function printMessage(res) {
  let command = '';
  if (os.platform() === 'darwin') {
    // macOS
    command = `osascript -e 'tell application "Terminal" to activate' -e 'tell application "Terminal" to do script "echo \\"Here is your modules...\\n${res}\\""'\n`;
  } else if (os.platform() === 'win32') {
    // Windows
    command = `start cmd /k "echo Here is the module: & echo ${res} & pause"`;
  } else {
    // Linux (assuming bash)
    command = `gnome-terminal -- bash -c 'echo "Here is the module:" && echo ${res} && read -p "Press Enter to close..."'`;
  }
  return command;
}

module.exports = printMessage;
