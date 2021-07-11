const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

// create test for setting up github
test("setting github via constructor arguments", () => {
  const githubStore = "githubUserName";
  const employee = new Engineer(
    "someName",
    1234,
    "random@email.com",
    githubStore
  );
  expect(employee.github).toBe(githubStore);
});
// create test for getting getGithub()
test("getting github username via Github()", () => {
  const employee = new Engineer("name", 1234, "random@email.com", "githubName");
  expect(employee.getGithub()).toBe("githubName");
});
// create test for getting getRole()
test("getting github username via Github()", () => {
  const employee = new Engineer("name", 1234, "random@email.com", "githubName");
  expect(employee.getRole()).toBe("Engineer");
});
