const fs = require("fs");
const util = require("util");

const open = util.promisify(fs.open);
const write = util.promisify(fs.write);
const close = util.promisify(fs.close);

const runMe = async () => {
  const fd = await open("numbers2.txt", "w");
  for (let i = 1; i <= 100; i++) {
    await write(fd, `${i}\n`);
  }
  await close(fd);
}

runMe().then(() => console.log("Writing is finished"));