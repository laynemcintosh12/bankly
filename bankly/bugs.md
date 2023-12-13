

1. Middleware/auth.js
- Bug 1: function authUser() doesn't verify JSON Payload. It uses jwt.decode(token) instead of jwt.verify(token)

2. Routes/users.js
- Bug 2: The router.delete() route need to await User.delete(), currently there is no await
- Bug 3: The router.patch() route needs to remove the requireAdmin function, currently only admins can update their or other accounts, a user should be able to update their own account.
- Bug 4: The router.patch() route does not validate with a JSON Schema, need to add in a validation route
- Bug 5: The router.get('/') route wants to return only basic info, however User.getAll() returns more than just basic info. I added a new function to the user model that is only for basic info, it should be called instead of getAll()

3. Routes/auth.js
- Bug 6: The router.post('/Login) route needs to await User.authenticate()

