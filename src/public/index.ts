import { DataSource } from "typeorm";
import { Rules } from "../entity/roa";
import "reflect-metadata";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "banana",
  database: "roa",
  entities: [Rules],
  synchronize: false,
  logging: true,
});
AppDataSource.initialize()
  .then((ds) => {
    const express = require("express");
    const app = express();
    const port = 3306;

    app.get("../entity/roa", (req, res) => {
      let query = req.rules;
      res.send(`Yea Boi`);
      console.log(query);
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

    // Example of sql injection for what should be a limited scope query with a single value in the where clause for rule id
    /*const bad_user_input = "1 \" OR 1=\"1"


    ds.query("SELECT * FROM rules WHERE rule = \"" + bad_user_input + "\"").then((rules) => {
      console.log(rules)
    })*/

    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

/*
YOUR MISSION:
- Fetch all of the rules and output them upon running of the ... script.. thing ...
*/
