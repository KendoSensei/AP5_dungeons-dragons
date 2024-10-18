import { CharacterService } from "../services/CharacterService";
import { Character } from "../entities/character.entity";

export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  createCharacter(character: Character): Character {
    return this.characterService.createCharacter(character);
  }
}
