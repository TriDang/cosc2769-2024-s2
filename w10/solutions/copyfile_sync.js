const fs = require("fs");

const lines = fs.readFileSync("./source.txt", "utf-8").split(/\r?\n/);
let lineNumber = 1;
let data = "";  // copied data
lines.forEach(line => {
  if (lineNumber % 2 == 1) {
    data += `${line}\n`;
  }
  lineNumber++;
});
fs.writeFileSync("./target3.txt", data);
console.log("Finished!");
