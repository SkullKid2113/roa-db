"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "banana",
    database: "roa",
});
AppDataSource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});
