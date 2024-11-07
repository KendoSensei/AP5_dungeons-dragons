import { ISpellcastingAbility } from "../interfaces/spellcasting.interface";

export class SpellcastingAbility {
  index?: string;
  level?: number;
  name?: string;
  url?: string;

  constructor(data: ISpellcastingAbility) {
    this.index = data.index;
    this.level = data.level;
    this.name = data.name;
    this.url = data.url;
  }
}
