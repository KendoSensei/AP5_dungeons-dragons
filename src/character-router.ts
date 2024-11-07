import express from "express";
import { CharacterController } from "./controllers/CharacterController";
import { Character } from "./entities/character.entity";
import { validateAlignmentMiddleware } from "./middleware/validateAlignmentMiddleware";
import { validateRaceMiddleware } from "./middleware/validateRaceMiddleware";
import { CreateCharacterUseCase } from "./usecase/CreateCharacterUseCase";
import { GetCreationInfoUseCase } from "./usecase/GetCreationInfoUseCase";
import { CharacterService } from "./services/CharacterService";
import { DataService } from "./data/DataService";

const router = express.Router();
const dataService = new DataService();
const characterService = new CharacterService();
const getCreationInfoUseCase = new GetCreationInfoUseCase(dataService);
const createCharacterUseCase = new CreateCharacterUseCase(characterService);
const characterController = new CharacterController(getCreationInfoUseCase, createCharacterUseCase);

router.get("/creation-info", async (_req, res, next) => {
  try {
    const info = await characterController.getCreationInfo();
    res.json(info);
  } catch (error) {
    next(error);
  }
});

router.post("/characters", validateRaceMiddleware, validateAlignmentMiddleware, async (req, res) => {
  const { name, image, race, alignment, attributes, classname } = req.body;

  const character = new Character(name, image, race, alignment, attributes, classname);

  try {
    const createdCharacter = await characterController.createCharacter(character);
    res.status(201).json(createdCharacter);
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error" });
  }
});

export default router;
