import {DataSource} from "typeorm";
import {Rules} from "../entity/rules";

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
})

export default AppDataSource;
