import { Character } from "../entities/character.entity";
import { FindCharacterUseCase } from "../usecase/FindCharacterUseCase";

export class CharacterController {
  private findCharacterUseCase: FindCharacterUseCase;

  constructor(findCharacterUseCase: FindCharacterUseCase) {
    this.findCharacterUseCase = findCharacterUseCase;
  }

  findCharacter(): void {
    this.findCharacterUseCase.execute();
  }

  createCharacter(character: Character): Character {
    return character;
  }
}
