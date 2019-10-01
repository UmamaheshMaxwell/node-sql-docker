const Sequelize = require("sequelize");
const express = require("express");
const app = express();
let sequelize = new Sequelize("somedb", "someuser", "somepass", {
  dialect: "mssql",
  host: "someserver",
  dialectOptions: {
    options: {
      encrypt: true
    }
  },
  logging: console.log
});

app.get("/", (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.json({ message: "Connected to DB Successfully!" });
      console.log("Connected to DB Successfully!");
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(8080, () => {
  console.log("Server listening on PORT 8080");
});
