const fs = require("fs/promises");

// write line-by-line recursively
const writeFile = async (fd, lines, start) => {
  if (start >= lines.length) return;
  fd.write(`${lines[start]}\n`).then(() => writeFile(fd, lines, start + 1));
}

const copyOdd = async () => {
  const fd = await fs.open("./source.txt");
  const fd2 = await fs.open("./target1.txt", "w");
  const content = await fd.readFile("utf-8");
  const lines = content.split(/\r?\n/);
  const arr = [];
  let lineNumber = 1;
  lines.forEach(line => {
    if (lineNumber % 2 == 1) {
      arr.push(line);
    }
    lineNumber++;
  });
  await writeFile(fd2, arr, 0);
  console.log("Finished!");
}

copyOdd();