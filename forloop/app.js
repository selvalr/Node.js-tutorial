const fs = require("fs");

for (let i = 0; i < 10; i++) {
  fs.appendFile(`mynewfile-${i}.txt`, `Hello content ${i}!`, function (err) {
    if (err) throw err;
    console.log(`mynewfile-${i}.txt created`);
  });
}