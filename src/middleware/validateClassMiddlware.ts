import { Response, Request, NextFunction } from "express";
import { DataService } from "../data/DataService";

const dataService = new DataService();

export async function validateClassMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  try {
    const classname = req.body.classname;
    const classFetched = await dataService.getClass(classname.toLowerCase());

    if (!classFetched) {
      const classes = await dataService.getClasses().then((response) => response?.results.map((item) => item.name));
      const error = new Error("Class is not valid, choose one of the following: " + classes?.join(", "));
      return next(error);
    }

    next();
  } catch (error) {
    return next(error);
  }
}
