import { Response, Request, NextFunction } from "express";

export async function validateAttributesMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  try {
    const requiredAttributes = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
    const { attributes } = req.body;

    for (const attr of requiredAttributes) {
      if (!attributes[attr] || typeof attributes[attr] !== "number" || attributes[attr] < 1 || attributes[attr] > 20) {
        const error = new Error("Attributes are not valid");
        return next(error);
      }
    }
    next();
  } catch (error) {
    return next(error);
  }
}
