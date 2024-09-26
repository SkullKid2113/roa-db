import { Request, Response, Router } from "express";
import db from "../db";
import { Rule } from "../../entity/rule";
import { Like } from "typeorm";

const router = Router();

router.get("/search", (req: Request, res: Response) => {
  console.log("/search request: ", req.query);
  db.getRepository(Rule)
    .findBy({
      rule: Like(`%${req.query.q}%`),
    })
    .then((rules) => {
      res.status(200).json(rules);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({});
    });
});

router.get("/rules", (_: Request, res: Response) => {
  db.getRepository(Rule)
    .find()
    .then((rules) => {
      console.log("# rules loaded", rules.length);
      res.status(200).json(rules);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({});
    });
});

export default router;
