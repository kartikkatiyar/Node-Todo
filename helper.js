const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "todos.json");

const readTodos = () => {
  return new Promise((resolve, reject) => {
    const callback = (error, data) => {
      if (error) {
        reject(error);
      }
      if (!error) {
        resolve(data);
      }
    };
    fs.readFile(filePath, callback);
  });
};

const writeTodos = (todos) => {
  const data = JSON.stringify(todos, null, 2);
  return new Promise((resolve, reject) => {
    const options = {
      encoding: "utf-8",
      flag: "w",
    };
    const callback = (error) => {
      if (error) {
        reject(error);
      }
      if (!error) {
        resolve();
      }
    };
    fs.writeFile(filePath, data, options, callback);
  });
};

module.exports = { readTodos, writeTodos };
