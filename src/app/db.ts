import {DataSource} from "typeorm";
import {Rule} from "../entity/rule";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "banana",
  database: "roa",
  entities: [Rule],
  synchronize: false,
  logging: true,
})

export default AppDataSource;
