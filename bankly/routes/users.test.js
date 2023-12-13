describe('users routes, router.patch', () => {
    test("should patch data if self and non-admin", async function () {
        const response = await request(app)
        .patch("/users/u1")
        .send({ _token: tokens.u1, first_name: "new-fn1" }); // u1 is non-admin, updating self
        expect(response.statusCode).toBe(200);
        expect(response.body.user).toEqual({
        username: "u1",
        first_name: "new-fn1",
        last_name: "ln1",
        email: "email1",
        phone: "phone1",
        admin: false,
        password: expect.any(String),
        });
    });
    test("cant patch unallowed fields", async function () {
        const response = await request(app)
        .patch("/users/u1")
        .send({ _token: tokens.u1, admin: true });
        expect(response.statusCode).toBe(400);
    });
    test("cant patch on backend", async function () {
        const response = await request(app)
        .patch("/users/u1")
        .send({ _token: tokens.u1, random: false });
        expect(response.statusCode).toBe(400);
    });
})

describe('user routes, router.delete', () => {
    test("should throw 404 if user does not exist", async function () {
        const response = await request(app)
          .delete("/users/no-such-user")
          .send({ _token: tokens.u3 }); 
        expect(response.statusCode).toBe(404);
    });
})