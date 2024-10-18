import { Character } from "entities/character.entity";
import { Router, Request, Response } from "express";
import { getCharacterInfo } from "services/ClassService";

export const router = Router();

router.get("/:character", (request: Request, response: Response) => {
  const character = request.params.character;
  getCharacterInfo(character);

  response.send(`Character: ${Character}`);
});
