import { Router, Request, Response } from "express";
import { ClassService } from "./services/ClassService";

export const router = Router();
const classService: ClassService = new ClassService();

router.get(`/features/:character`, async (request: Request, response: Response) => {
  const character = request.params.character;
  const feature = await classService.getFeatures(character);

  response.json(feature);
});

router.get(`/spells/:character`, async (request: Request, response: Response) => {
  const character = request.params.character;
  const spells = await classService.getSpells(character);

  response.json(spells);
});

router.get(`/subclasses/:character`, async (request: Request, response: Response) => {
  const character = request.params.character;
  const subclasses = await classService.getSubClasse(character);

  response.json(subclasses);
});

router.get(`/ressources/:character`, async (request: Request, response: Response) => {
  const character = request.params.character;
  const ressources = await classService.getLevelRessources(character);
  console.log("aaaaaa", ressources);

  response.json(ressources);
});

router.get(`/proficiencies/:character`, async (request: Request, response: Response) => {
  const character = request.params.character;
  const proficiencies = await classService.getProfiencies(character);

  response.json(proficiencies);
});

router.get(`/allGet/:character`, async (request: Request, response: Response) => {
  const character = request.params.character;
  const allGet = await classService.allGet(character);

  response.json(allGet);
});
