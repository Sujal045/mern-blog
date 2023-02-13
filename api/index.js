const express = require("express");
const cors = require("cors");
const { json } = require("express");
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
  res.json("test ok");
});

app.listen(4000, () => {
  console.log("connected");
});
