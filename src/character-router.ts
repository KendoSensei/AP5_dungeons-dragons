import express from "express";
import { CharacterController } from "./controllers/CharacterController";
import { validateAlignmentMiddleware } from "./middleware/validateAlignmentMiddleware";
import { validateRaceMiddleware } from "./middleware/validateRaceMiddleware";
import { CreateCharacterUseCase } from "./usecase/CreateCharacterUseCase";
import { GetCreationInfoUseCase } from "./usecase/GetCreationInfoUseCase";
import { CharacterService } from "./services/CharacterService";
import { DataService } from "./data/DataService";
import { validateAttributesMiddleware } from "./middleware/validateAttributesMiddleware";
import { validateClassMiddleware } from "./middleware/validateClassMiddlware";

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

router.post(
  "/characters",
  validateRaceMiddleware,
  validateAlignmentMiddleware,
  validateAttributesMiddleware,
  validateClassMiddleware,
  async (req, res) => {
    try {
      const createdCharacter = await characterController.createCharacter(req);
      res.status(201).json(createdCharacter);
    } catch (error) {
      const message = (error as Error).message;
      res.status(400).json({ message });
    }
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const message = err.message || "Internal Server Error";
  res.status(400).json({ error: message });
});

export default router;
