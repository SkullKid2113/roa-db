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


    // Example of sql injection for an update query
    const bad_user_input = "1 \" OR 1=\"1"


    ds.query("SELECT * FROM rules WHERE rule = \"" + bad_user_input + "\"").then((rules) => {
      console.log(rules)
    })

    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

/*
YOUR MISSION:
- Fetch all of the rules and output them upon running of the ... script.. thing ...
*/
