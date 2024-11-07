import { ISpellcasting } from "../interfaces/spellcasting.interface";
import { SpellcastingAbility } from "./spellcasting-ability.entity";

export class Spellcasting {
  level?: number;
  info?: {
    name?: string;
    desc?: string[];
  };
  spellcasting_ability?: SpellcastingAbility;

  constructor(data: ISpellcasting) {
    if (data.level) this.level = data.level;
    if (data.info)
      this.info = {
        name: data.info.name,
        desc: data.info.desc,
      };
    if (data.spellcasting_ability) this.spellcasting_ability = new SpellcastingAbility(data.spellcasting_ability);
  }
}
