const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const Route = require("./Route/EmployeeRoute");

app.use(express.json());
app.use(cors());
app.use("/api", Route);

app.use("/", (req, res) => {
  res.send("This Is HOME Page");
});

app.listen(4000, async () => {
  try {
    await connection();
    console.log("Your server is running by PORT - 4000");
  } catch (err) {
    console.log("Error in starting server", err);
  }
});
