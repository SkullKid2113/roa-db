import * as express from "express"
import api from "./controller/api";
import db from "./db"

const app = express()
const port = process.env.PORT || 4200

app.use('/assets', express.static('src/assets'))
app.use('/api/v1/', api)

db.initialize().then(() => {
  console.log("Database initialized")
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
})
