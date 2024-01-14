"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var roa_1 = require("../entity/rules");
require("reflect-metadata");
var AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "banana",
    database: "roa",
    entities: [roa_1.Rules],
    synchronize: false,
    logging: true,
});
AppDataSource.initialize()
    .then(function (ds) {
    var express = require("express");
    var app = express();
    var port = 3306;
    app.get("../entity/roa", function (req, res) {
        var query = req.roa_1;
        res.send("Yea Boi");
        console.log(query);
    });
    app.listen(port, function () {
        console.log("Example app listening on port ".concat(port));
    });
    // Example of sql injection for what should be a limited scope query with a single value in the where clause for rule id
    /*const bad_user_input = "1 \" OR 1=\"1"


    ds.query("SELECT * FROM rules WHERE rule = \"" + bad_user_input + "\"").then((rules) => {
      console.log(rules)
    })*/
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});
/*
YOUR MISSION:
- Fetch all of the rules and output them upon running of the ... script.. thing ...
*/
