import { Character } from "../entities/character.entity";
import { CharacterService } from "../services/CharacterService";

export interface Result<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export class CreateCharacterUseCase {
  private characterService: CharacterService;

  constructor(characterService: CharacterService) {
    this.characterService = characterService;
  }

  async execute(character: Character): Promise<{
    data: Promise<Awaited<undefined | Character>>;
    success: boolean;
    error: string;
  }> {
    try {
      const createdCharacter = this.characterService.createCharacter(character);
      return { data: createdCharacter, success: true, error: "" };
    } catch (error) {
      return {
        data: Promise.resolve(undefined),
        success: false,
        error: "Failed to create character: " + (error as Error).message,
      };
    }
  }
}
