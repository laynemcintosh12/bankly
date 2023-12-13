const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../helpers/expressError");
const { authUser } = require("./auth");

const { SECRET_KEY } = require("../config");
const tamperedJwt = jwt.sign({ username: "test", isAdmin: false }, "tampered-secret-key");

describe("authUser", function () {
  test("should prevent payload from being altered", async function () {
    const tampered = jwt.sign(
      { username: "user", admin: true },
      tamperedJwt
    );
    const response = await request(app)
      .get("/users")
      .send({ _token: tampered });
    expect(response.statusCode).toBe(401);
  });
});