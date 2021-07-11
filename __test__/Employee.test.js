const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("can set name via constructor arguments", () => {
  const nameStore = "employeeName";
  const employee = new Employee(nameStore);
  expect(employee.name).toBe(nameStore);
});

test("can set id via constructor arguments", () => {
  const idStore = 1234;
  const employee = new Employee("newPerson", idStore);
  expect(employee.id).toBe(idStore);
});

test("can set email via constructor arguments", () => {
  const emailStore = "persons@gmail.com";
  const employee = new Employee("name", 1, emailStore);
  expect(employee.email).toBe(emailStore);
});

test("testing to get name via getName()", () => {
  const nameStore = "employeeName";
  const employee = new Employee(nameStore);
  expect(employee.getName()).toBe(nameStore);
});

test("testing to get id via getId()", () => {
  const idStore = 1234;
  const employee = new Employee("newPerson", idStore);
  expect(employee.getId()).toBe(idStore);
});

test("testing to get email via getEmail()", () => {
  const emailStore = "persons@gmail.com";
  const employee = new Employee("name", 1, emailStore);
  expect(employee.getEmail()).toBe(emailStore);
});

test("getting role via getRole() ", () => {
  const employee = new Employee("name", 1, "random@email.com");
  expect(employee.getRole()).toBe("Employee");
});
