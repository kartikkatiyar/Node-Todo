const chai = require("chai");
const path = require("path");
const fs = require("fs");

const { readTodosAll,createTodo ,updateTodo} = require("../script");

const { v4 : uuidv4 } =require('uuid');

const expect = chai.expect;

const TODOS_FILE_PATH = path.join(__dirname, "..", "todos.json");

describe("CRUD Todos Tests", function () {

  it("should read json when readAllTodos is invoked",async function () {

    const todosExists = fs.existsSync(TODOS_FILE_PATH);
    expect(todosExists).to.be.true;

    const manualRead = fs.readFileSync(TODOS_FILE_PATH, { encoding: "utf-8" });
    const functionRead = await readTodosAll();
    expect(manualRead).to.equal(functionRead);
  });

  it("should create an entry in json when createTodo is invoked",async function () {
    const CUSTOM_TODO = `custom todo ${uuidv4()}`;

    const todosExists = fs.existsSync(TODOS_FILE_PATH);
    expect(todosExists).to.be.true;

    const functionCreate = await createTodo(CUSTOM_TODO);
    const manualRead = fs.readFileSync(TODOS_FILE_PATH, { encoding: "utf-8" });
    console.log( manualRead,"ll")
    expect(manualRead).to.include(CUSTOM_TODO);
  });

});
