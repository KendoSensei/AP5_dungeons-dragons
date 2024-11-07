import { Character } from "../entities/character.entity";
import { CharacterService } from "../services/CharacterService";

export class GetCharactersUseCase {
  private characterService: CharacterService;

  constructor(characterService: CharacterService) {
    this.characterService = characterService;
  }

  async execute(): Promise<{
    data: Character[] | Promise<undefined>;
    success: boolean;
    error: string;
  }> {
    try {
      const characters = await this.characterService.getCharacters();
      return { data: characters, success: true, error: "" };
    } catch (error) {
      return {
        data: Promise.resolve(undefined),
        success: false,
        error: "Failed to create character: " + (error as Error).message,
      };
    }
  }
}
