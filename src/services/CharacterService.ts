import { Character } from "../entities/character.entity";
import db from "../data/database";

export class CharacterService {
  async createCharacter(character: Character): Promise<Character> {
    const characters = (await db.getData("/characters")) as Character[];

    characters.push(character);
    db.push("/characters", characters, true);

    return character;
  }

  async getCharacters(): Promise<Character[]> {
    try {
      return await db.getData("/characters");
    } catch (error) {
      throw new Error("Failed to retrieve characters: " + (error as Error).message);
    }
  }
}
