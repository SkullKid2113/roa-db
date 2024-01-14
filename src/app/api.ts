import {Router, Request, Response} from "express";

const router = Router()

router.get("/search", (req: Request, res: Response) => {
  console.log("/search request: ", req.query)
  res.json(req.query)
});

export default router
