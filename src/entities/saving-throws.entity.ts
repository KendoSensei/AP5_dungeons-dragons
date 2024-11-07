import { ISavingThrows } from "../interfaces/saving-throws.interface";
import { SavingThrowsEnum } from "../enum/saving-throws.enum";

export class SavingThrows {
  index: keyof typeof SavingThrowsEnum;
  level?: number;
  name?: string;
  url?: string;

  constructor(data: ISavingThrows) {
    if (!Object.keys(SavingThrowsEnum).includes(data.index.toUpperCase())) {
      throw new Error(`Invalid index value: ${data.index}`);
    }

    this.index = data.index as keyof typeof SavingThrowsEnum;
    this.level = data.level;
    this.name = data.name;
    this.url = data.url;
  }
}
