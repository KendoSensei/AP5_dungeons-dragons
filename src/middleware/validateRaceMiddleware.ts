import { DataService } from "../data/DataService";
import { Request, Response, NextFunction } from "express";

const dataService = new DataService();

export async function validateRaceMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const raceName = req.body.race;
    const raceFetched = await dataService.getRace(raceName);

    if (!raceFetched) {
      res.status(422).json({ error: "Race not found" });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
}
