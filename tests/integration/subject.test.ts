import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import "../../src/setup"

beforeAll(async () => {
  await init()
})

afterAll(async () => {
  await getConnection().close()
})

describe("GET /subjects", () => {
  it("should answer subjects array and status 200 for success", async () => {
    const response = await supertest(app).get("/subjects");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String)
        })
      ])
    )
  });
});
