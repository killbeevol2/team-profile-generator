const Manager = require("../lib/Manager");

// create test to get officeNumber
test("getting officeNumber via constructor arguments", () => {
  const officeNumber = "(123)123-1234";
  const employee = new Manager(
    "someName",
    1234,
    "random@email.com",
    officeNumber
  );
  expect(employee.officeNumber).toBe(officeNumber);
});

// create test for getRole()
test("getting role via getRole() ", () => {
  const employee = new Manager("name", 1, "random@email.com");
  expect(employee.getRole()).toBe("Manager");
});
