const express = require("express");
const cors = require("cors");
const { json } = require("express");
const User = require("./models/user");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const app = express();

const jwt = require("jsonwebtoken");

const bcryptSalt = bcrypt.genSaltSync(10);
const secret = "hksakljfflkjsdfklsdjflkjds";
mongoose.set("strictQuery", true);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog:H77MeVuxQ9E2SPMl@cluster0.ct7thpo.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    //logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.json(token);
    });
    // res.json()
  } else {
    res.status(400).json("Wrong credentials");
  }
  // res.json(passOk);
});

app.listen(4000, () => {
  console.log("connected");
});

// H77MeVuxQ9E2SPMl
