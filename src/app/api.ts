import {Request, Response, Router} from "express";
import db from "./db";
import {Rules} from "../entity/rules";
import {Like} from "typeorm";

const router = Router();

router.get("/search", (req: Request, res: Response) => {
  console.log("/search request: ", req.query);
  const episodes = db
    .getRepository(Rules)
    .findBy({
      rule: Like(`%${req.query.q}%`)
    })
    .then((rules) => {
      res.status(200).json(rules)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({})
    })
});

router.get("/rules", (req: Request, res: Response) => {

  db.getRepository(Rules)
    .find()
    .then((rules) => {
      console.log("# rules loaded", rules.length);
      res.status(200).json(rules)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({})
    })
});

export default router;
