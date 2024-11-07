import { IAbilityBonus } from "./ability-bonus.interface";
import { ILanguage } from "./language.interface";
import { ITrait } from "./trait.interface";
import { IProficiency } from "./proficiency.interface";
import { IProficiencyOptions } from "./proficiency-options.interface";
import { ISubrace } from "./subrace.interface";

export interface IRace {
  index?: string;
  level?: number;
  name: string;
  url?: string;
  speed?: number;
  ability_bonuses?: IAbilityBonus[];
  alignment?: string;
  age?: string;
  size?: string;
  size_description?: string;
  starting_proficiencies?: IProficiency[];
  starting_proficiency_options?: IProficiencyOptions;
  languages?: ILanguage[];
  language_desc?: string;
  traits?: ITrait[];
  subraces?: ISubrace[];
}

export interface RacesResponse {
  count: number;
  results: IRace[];
}
