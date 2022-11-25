const express = require("express");
const { Post } = require("../models");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "This is the express server" });
});

app.listen(port, () => {
  console.log("App listening on port" + port);
});
