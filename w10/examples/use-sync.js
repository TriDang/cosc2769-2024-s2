const fs = require("fs");

const fd = fs.openSync("numbers1.txt", "w");
for (let i = 1; i <= 100; i++) {
  fs.writeSync(fd, `${i}\n`);
}
fs.closeSync(fd);
