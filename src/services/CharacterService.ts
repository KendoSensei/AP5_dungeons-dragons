import { Character } from "../entities/character.entity";

export class CharacterService {
  async createCharacter(character: Character) {
    await fetch(`postCharacter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ character }),
    });
  }
}
