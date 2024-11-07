import { Character } from "../entities/character.entity";
import { GetCreationInfoUseCase } from "../usecase/GetCreationInfoUseCase";
import { CreateCharacterUseCase } from "../usecase/CreateCharacterUseCase";

export class CharacterController {
  private getCreationInfoUseCase: GetCreationInfoUseCase;
  private createCharacterUseCase: CreateCharacterUseCase;

  constructor(getCreationInfoUseCase: GetCreationInfoUseCase, createCharacterUseCase: CreateCharacterUseCase) {
    this.getCreationInfoUseCase = getCreationInfoUseCase;
    this.createCharacterUseCase = createCharacterUseCase;
  }

  async createCharacter(character: Character): Promise<{
    data: Promise<Awaited<Character | undefined>>;
    success: boolean;
    error: string;
  }> {
    return this.createCharacterUseCase.execute(character);
  }

  async getCreationInfo() {
    return await this.getCreationInfoUseCase.execute();
  }
}
