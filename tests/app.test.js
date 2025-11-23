const request = require("supertest");
const app = require("../index");

describe("Node App API Tests", () => {
  test("GET /api returns welcome message", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("success");
  });

  test("GET /health returns healthy status", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("healthy");
  });
});
