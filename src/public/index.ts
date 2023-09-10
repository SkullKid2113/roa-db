import {DataSource} from "typeorm"

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "banana",
  database: "roa",
})
AppDataSource.initialize()
  .then((ds) => {

    ds.query("SELECT * FROM rules").then((rules) => {
      console.log(rules)
    })

    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })


// Use AppDataSource to query all rules


/*
YOUR MISSION:
- Fetch all of the rules and output them upon running of the ... script.. thing ...
*/
