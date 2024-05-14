const { randomUUID } = require("node:crypto");
const { existsSync, writeFileSync, mkdirSync } = require("node:fs");

const id = randomUUID();

const dirPath = `${process.cwd()}/skew`;
const filePath = `${process.cwd()}/skew/id`;
const dir = existsSync(dirPath);
if (!dir) {
  mkdirSync(dirPath);
}
writeFileSync(filePath, id, { encoding: "utf-8" });

module.exports = {
  dirPath,
  filePath,
};
