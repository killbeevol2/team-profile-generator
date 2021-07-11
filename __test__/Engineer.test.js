const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

// github
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
// getGithub()
test("getting github username via Github()", () => {
  const employee = new Engineer("name", 1234, "random@email.com", "githubName");
  expect(employee.getGithub()).toBe("githubName");
});
// getRole()
test("getting github username via Github()", () => {
  const employee = new Engineer("name", 1234, "random@email.com", "githubName");
  expect(employee.getRole()).toBe("Engineer");
});
