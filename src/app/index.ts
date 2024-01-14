import * as express from "express"
import api from "./api";
import {initialize} from "./db";

const app = express()
const port = process.env.PORT || 4200

// const db = initialize()

app.use('/assets', express.static('src/assets'))
app.use('/api/v1/', api)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
