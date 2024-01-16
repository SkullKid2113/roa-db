import { Router, Request, Response } from "express";
import db from "./db";
import { Rules } from "../entity/rules";
import { Like } from "typeorm";

const router = Router();

router.get("/search", (req: Request, res: Response) => {
  console.log("/search request: ", req.query);
  const episodes = db
    .getRepository(Rules)
    .findBy({
      rule: Like("%%"),
    })
    .then((rules: Rules[]) => {
      console.log(episodes);
    });
  res.json(req.query);
});

router.get("/rules", (req: Request, res: Response) => {
  db.query("SELECT * FROM rules").then((rules: Rules[]) => {
    console.log("# rules loaded", rules.length);
    res.json(rules);
  });
});

export default router;
