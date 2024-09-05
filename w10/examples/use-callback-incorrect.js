const fs = require("fs");

fs.open("wrong_order_numbers.txt", "w", (err, fd) => {
  if (!err) {
    for (let i = 1; i <= 100; i++) {
      fs.write(fd, `${i}\n`, (err) => {
        // do nothing
      });
    }
    fs.close(fd, (err) => {
      console.log("File writing is finished");
    });
  }
});

console.log("Waiting for file writing");
