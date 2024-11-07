import { NextFunction, Request, Response } from "express";

export async function validateCharacterMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  if (!req.body.name) {
    return next(new Error("Character name is required"));
  }

  if (!req.body.classname) {
    return next(new Error("Character class is required"));
  }

  if (!req.body.alignment) {
    return next(new Error("Character alignment is required"));
  }

  if (!req.body.race) {
    return next(new Error("Character race is required"));
  }

  if (!req.body.attributes) {
    return next(new Error("Character attributes are required"));
  }
  next();
}
