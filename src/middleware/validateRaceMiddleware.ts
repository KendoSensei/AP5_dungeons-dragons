import { DataService } from "../data/DataService";
import { Request, Response, NextFunction } from "express";

const dataService = new DataService();

export async function validateRaceMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  try {
    const raceName = req.body.race;
    const raceFetched = await dataService.getRace(raceName);

    if (!raceFetched) {
      const races = await dataService.getRaces().then((response) => response?.results.map((item) => item.name));
      const error = new Error("Race is not valid, choose one of the following: " + races?.join(", "));
      return next(error);
    }

    next();
  } catch (error) {
    next(error);
  }
}
