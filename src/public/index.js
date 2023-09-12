"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var roa_1 = require("../entity/roa");
require("reflect-metadata");
var AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "banana",
    database: "roa",
    entities: [roa_1.Rule],
    synchronize: false,
    logging: true,
});
AppDataSource.initialize()
    .then(function (ds) {
    // Example of sql injection for what should be a limited scope query with a single value in the where clause for rule id
    var bad_user_input = "1 \" OR 1=\"1";
    ds.query("SELECT * FROM rules WHERE rule = \"" + bad_user_input + "\"").then(function (rules) {
        console.log(rules);
    });
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});
/*
YOUR MISSION:
- Fetch all of the rules and output them upon running of the ... script.. thing ...
*/
