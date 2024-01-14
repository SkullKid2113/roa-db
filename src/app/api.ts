import {Router, Request, Response} from "express";
import db from "./db";
import {Rules} from "../entity/rules";

const router = Router()

router.get("/search", (req: Request, res: Response) => {
  console.log("/search request: ", req.query)
  res.json(req.query)
})

router.get("/rules", (req: Request, res: Response) => {

  db.query("SELECT * FROM rules").then((rules: Rules[]) => {
    console.log("# rules loaded", rules.length)
    res.json(rules)
  })
})

export default router
