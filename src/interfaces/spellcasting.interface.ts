export interface ISpellcastingAbility {
  index?: string;
  name?: string;
  url?: string;
  level?: number;
}

export interface ISpellcasting {
  level: number;
  info: {
    name?: string;
    desc?: string[];
  };
  spellcasting_ability: ISpellcastingAbility;
}
