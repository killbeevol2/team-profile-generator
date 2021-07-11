const Intern = require("../lib/Intern");

// create test for setting up school
test("setting github via constructor arguments", () => {
  const school = "schoolName";
  const employee = new Intern("someName", 1234, "random@email.com", school);
  expect(employee.school).toBe(school);
});
// create test for getting getRole()
test("getting role via getRole()", () => {
  const school = "schoolName";
  const employee = new Intern("someName", 1234, "random@email.com", school);
  expect(employee.getRole()).toBe("Intern");
});
// create test for getting getSchool()
test("getting role via getSchool()", () => {
  const school = "schoolName";
  const employee = new Intern("someName", 1234, "random@email.com", school);
  expect(employee.getSchool()).toBe(school);
});
