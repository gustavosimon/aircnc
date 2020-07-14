import Spot from "../models/Spot";
import { Request, Response } from "express";

class SpotController {
  async store(req: Request, res: Response) {
    return res.json({ message: "ok" });
  }
}

export default SpotController;
