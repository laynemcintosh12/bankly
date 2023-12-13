describe('User model', function() {
    test("should throw 404 if user not found", async function () {
        const response = await request(app)
          .get("/users/not-a-user")
          .send({ _token: tokens.u1 });
        expect(response.statusCode).toBe(404);
    });
});