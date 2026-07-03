const express = require("express");
const cors = require("cors");
const testRoutes = require("./routes/testRoutes");
const managerRoutes = require("./routes/managerRoutes");
require("dotenv").config();
const leaveRoutes = require("./routes/leaveRoutes");

const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use("/api", testRoutes);
app.use(express.json());
app.use("/api/leaves", leaveRoutes);
app.use("/api/manager", managerRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Leave Management System Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});