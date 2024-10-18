import { Character } from "entities/character.entity";
import { CharacterService } from "services/CharacterService";

export class CreateCharacterUseCase {
  private characterService: CharacterService;

  constructor(characterService: CharacterService) {
    this.characterService = characterService;
  }

  async execute(character: Character) {
    try {
      this.characterService.createCharacter(character);
    } catch (e: unknown) {
      throw new Error("respect les types parce que la t'es ma cuti: " + (e as Error).message);
    }
  }
}
