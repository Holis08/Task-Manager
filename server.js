const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/tasks", taskRoutes);

mongoose
  .connect("mongodb://localhost:27017/task_manager")
  .then(() => console.log("Terkoneksi ke MongoDB"))
  .catch((error) => console.error("Koneksi gagal:", error));

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log("Server berjalan di http://localhost:${PORT}");
  });
}

module.exports = app;
