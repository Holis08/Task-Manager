const request = require("supertest");
const app = require("../server"); // Mengimpor aplikasi dari server.js

describe("Task Manager API", () => {
  it("GET /tasks - harus mengembalikan daftar tugas", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("POST /tasks - harus menambahkan tugas baru", async () => {
    const newTask = { title: "Tugas Matematika", description: "Belajar persamaan kuadrat" };
    const res = await request(app).post("/tasks").send(newTask);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe(newTask.title);
  });
});
