### Conceptual Exercise

#### What is a JWT?

JWT stands for JSON Web Token. It is a compact, URL-safe means of representing claims between two parties. JWT is often used for authentication and information exchange in a secure manner.

#### What is the signature portion of the JWT? What does it do?

The signature portion of a JWT is one of the three parts of the token, along with the header and the payload. The signature is created using a secret key and is used to verify the integrity of the JWT. It ensures that the data in the token has not been tampered with during transmission.

#### If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, if a JWT is intercepted, the attacker can see the contents of the payload. However, they cannot modify the payload without invalidating the signature, which provides a level of integrity and security.

#### How can you implement authentication with a JWT? Describe how it works at a high level.

Authentication with JWT involves the following steps:

1. **User Authentication:** The user provides credentials, and the server validates them.
2. **Token Creation:** Upon successful authentication, the server creates a JWT containing user information.
3. **Token Issuance:** The server sends the JWT to the client.
4. **Subsequent Requests:** The client includes the JWT in the header of subsequent requests.
5. **Token Verification:** The server verifies the token's signature to ensure its integrity and extracts user information from the payload.

#### Compare and contrast unit, integration, and end-to-end tests.

- **Unit Tests:** Test individual components or functions in isolation to ensure they work as expected.
- **Integration Tests:** Verify interactions between different components or systems to ensure they integrate correctly.
- **End-to-End Tests:** Test the entire application flow to ensure all components work together as expected in a real-world scenario.

#### What is a mock? What are some things you would mock?

A mock is a simulated object or function used to mimic the behavior of real components during testing. Mocks are used to isolate and test specific parts of the system. Examples of things to mock include external services, databases, or complex computations that are not the focus of a particular test.

#### What is continuous integration?

Continuous Integration (CI) is a software development practice where code changes are automatically tested and integrated into the main codebase frequently. The goal is to identify and address integration issues early in the development process, ensuring a more stable and reliable codebase.

#### What is an environment variable and what are they used for?

An environment variable is a variable outside the application code that stores configuration settings. It is part of the environment in which a process runs. Environment variables are used to configure applications, store sensitive information, or control the behavior of the application without modifying the code.

#### What is TDD? What are some benefits and drawbacks?

Test-Driven Development (TDD) is a development approach where tests are written before the actual code. Benefits include improved code quality, better design, and faster debugging. Drawbacks may include the initial time investment in writing tests and the challenge of writing effective tests for complex systems.

#### What is the value of using JSONSchema for validation?

JSONSchema is a standard for defining the structure of JSON data. Using JSONSchema for validation ensures that data adheres to a predefined structure, improving data consistency and reducing the likelihood of errors in data processing.

#### What are some ways to decide which code to test?

Deciding which code to test can be based on factors like critical functionality, complexity, and areas prone to bugs. Code that handles business logic, input validation, and error-prone sections shoudl be prioritized for testing.

#### What does `RETURNING` do in SQL? When would you use it?

`RETURNING` is a clause in SQL that allows a data-modifying statement to return data from the affected rows. It is often used with `INSERT`, `UPDATE`, or `DELETE` statements to retrieve values generated during the operation, such as auto-generated IDs. This can be useful for obtaining information about the affected rows after the operation, without having to run a separate SELECT query.

#### What are some differences between Web Sockets and HTTP?

HTTP is a stateless protocol primarily used for traditional request-response interactions, while Web Sockets facilitate full-duplex, persistent connections, enabling bidirectional communication for real-time applications like chat or online gaming. Unlike HTTP, Web Sockets have lower overhead, making them suitable for scenarios where low-latency and continuous data exchange are crucial.

#### Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?

I prefered Flask, simply because I felt it was easier to use. I was able to get a webpage up and running in no time very easily as well as implement things like routing, templates, and forms. Flask also seemed to have a simpler structure than Express which I appreciated as a beginner. That said, Express is very powerful and popular so it's definitely worth learning as well. Both are great frameworks.
