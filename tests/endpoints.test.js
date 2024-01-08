const request = require("supertest");
const app = require("../index");

describe("Login Endpoint", () => {
  it("should return 200 and a success message upon successful login", async () => {
    const res = await request(app).post("/api/auth").send({
      email: "u1@kitra.abc",
      password: "123123",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Login successful");
  });

  it("should return 401 for invalid credentials", async () => {
    const res = await request(app).post("/api/auth").send({
      email: "u1@kitra.abc",
      password: "123123s",
    });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("error", "Invalid credentials");
  });
});

describe("Treasures Endpoint", () => {
  let authToken; // Store the authentication token

  beforeAll(async () => {
    // Perform login to get the authentication token
    const loginRes = await request(app).post("/api/auth").send({
      email: "u1@kitra.abc",
      password: "123123",
    });

    authToken = loginRes.body.token; // Assuming the token is returned in the response
  });

  it("should return 200 and an array of treasures for a valid request", async () => {
    const res = await request(app)
      .post("/api/treasures")
      .set("Authorization", `Bearer ${authToken}`)
      .send({
        latitude: 14.552036595352455,
        longitude: 121.01696118771324,
        distance: 10,
      });

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body.treasures)).toBe(true);
  });

  it("should return 400 for an invalid request", async () => {
    const res = await request(app)
      .post("/api/treasures")
      .set("Authorization", `Bearer ${authToken}`)
      .send({
        latitude: "invalid",
        longitude: "invalid",
        distance: 15,
      });

    expect(res.statusCode).toEqual(400);
  });

  it("should return 401 for an authorized request", async () => {
    const res = await request(app).post("/api/treasures").send({
      latitude: 14.552036595352455,
      longitude: 121.01696118771324,
      distance: 10,
    });

    expect(res.statusCode).toEqual(401);
  });
});
