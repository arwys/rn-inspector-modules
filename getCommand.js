function getCommand(obj) {
  const dataa = [obj];
  const arr = Object.keys(...dataa);
  let dataCommand = '';

  for (let i = 0; i < arr.length; i += 1) {
    const b = `${arr[i]}:${obj[arr[i]]}`;
    if (dataCommand.length === 0) {
      dataCommand += b;
    } else {
      dataCommand += `\n${b}`;
    }
  }
  return dataCommand.replace(/['"]/g, '');
}

module.exports = getCommand;
