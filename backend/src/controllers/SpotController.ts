import Spot from "../models/Spot";
import User from "../models/User";
import { Request, Response } from "express";

class SpotController {
  async index(req: Request, res: Response) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.json(spots);
  }

  async store(req: Request, res: Response) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json("User does not exists");
    }
    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map((tech: String) => tech.trim()),
      price,
    });
    return res.json(spot);
  }
}
export default SpotController;
