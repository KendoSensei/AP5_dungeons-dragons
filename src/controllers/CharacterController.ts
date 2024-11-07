import { Character } from "../entities/character.entity";
import { GetCreationInfoUseCase } from "../usecase/GetCreationInfoUseCase";
import { CreateCharacterUseCase } from "../usecase/CreateCharacterUseCase";
import { Request } from "express";
import { Race } from "../entities/race.entity";
import { Alignment } from "../entities/alignment.entity";
import { Order } from "../enum/order.enum";
import { Morality } from "../enum/morality.enum";
import { Attribute } from "../entities/attribute";
import { ClassEntity } from "../entities/class.entity";
import { DataService } from "../data/DataService";
import { IAttributes } from "../interfaces/attribute.interface";
import { GetCharactersUseCase } from "../usecase/GetCharactersUseCase";

interface CreateCharacterRequestBody {
  name: string;
  image: string;
  race: string;
  alignment: string;
  attributes: IAttributes;
  classname: string;
}

export class CharacterController {
  private getCreationInfoUseCase: GetCreationInfoUseCase;
  private createCharacterUseCase: CreateCharacterUseCase;
  private getCharactersUseCase: GetCharactersUseCase;
  private dataService: DataService = new DataService();

  constructor(
    getCreationInfoUseCase: GetCreationInfoUseCase,
    createCharacterUseCase: CreateCharacterUseCase,
    getCharactersUseCase: GetCharactersUseCase,
  ) {
    this.getCreationInfoUseCase = getCreationInfoUseCase;
    this.createCharacterUseCase = createCharacterUseCase;
    this.getCharactersUseCase = getCharactersUseCase;
  }

  async createCharacter(req: Request<object, object, CreateCharacterRequestBody>) {
    try {
      const { name, image, race, alignment, attributes, classname } = req.body;

      const [orderStr, moralityStr] = (alignment as string).split(" ");

      const character = new Character(
        name,
        image,
        new Race((await this.dataService.getRace(race.toLowerCase()))!),
        new Alignment(orderStr as Order, moralityStr as Morality),
        new Attribute(attributes),
        new ClassEntity((await this.dataService.getClass(classname.toLowerCase()))!),
      );

      return await this.createCharacterUseCase.execute(character);
    } catch (error) {
      throw new Error((error as Error).message || "Error creating character");
    }
  }

  async getCreationInfo() {
    return await this.getCreationInfoUseCase.execute();
  }

  async getCharacters() {
    return await this.getCharactersUseCase.execute();
  }
}
