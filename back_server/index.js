const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  console.log(`email: ${req.body.email}`);
  console.log(`password: ${req.body.password}`);
  res.send("success");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
