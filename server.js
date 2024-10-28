const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware untuk membaca JSON
app.use("/tasks", taskRoutes); // Menggunakan routes untuk tasks

mongoose
  .connect("mongodb://localhost:27017/task_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Terkoneksi ke MongoDB"))
  .catch((error) => console.error("Koneksi gagal:", error));

app.listen(PORT, () => {
  console.log("Server berjalan di http://localhost:${PORT}");
});
