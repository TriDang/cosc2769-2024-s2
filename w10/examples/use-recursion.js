const fs = require("fs");

const writeNumber = (fd, number, stop) => {
  if (number > stop) {
    fs.close(fd, (err) => console.log("File writing is finished"));
    return;
  }
  fs.write(fd, `${number}\n`, (err) => writeNumber(fd, number + 1, stop));
};

fs.open("numbers.txt", "w", (err, fd) => {
  if (!err) {
    writeNumber(fd, 1, 100);
  }
});
console.log("Waiting for file writing");
