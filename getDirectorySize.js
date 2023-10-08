const fs = require('fs');
const path = require('path');

function getDirectorySize(directoryPath) {
  let totalSize = 0;
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else {
      totalSize += stats.size;
    }
  }

  return totalSize;
}

module.exports = getDirectorySize;
