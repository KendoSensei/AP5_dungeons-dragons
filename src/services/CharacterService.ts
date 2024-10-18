import { Character } from "../entities/character.entity";

export class CharacterService {
  createCharacter(character: Character): Character {
    console.log("Character created");
    return character;
  }
}
