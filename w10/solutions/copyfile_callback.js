const fs = require("fs");

fs.readFile("./source.txt", "utf-8",  (err, content) => {
  const lines = content.split(/\r?\n/);
  let lineNumber = 1;
  let data = "";  // copied data
  lines.forEach(line => {
    if (lineNumber % 2 == 1) {
      data += `${line}\n`;
    }
    lineNumber++;
  });
  fs.writeFile("./target2.txt", data, (err) => {
    console.log("Finished!");
  });
});
