import { IRace } from "../interfaces/race.interface";
import { AbilityBonus } from "./ability-bonus.entity";
import { Proficiency } from "./proficiency.entity";

export class Race {
  index?: string;
  level?: number;
  name: string;
  url?: string;
  speed?: number;
  ability_bonuses?: AbilityBonus[];
  alignment?: string;
  age?: string;
  size?: string;
  size_description?: string;
  starting_proficiencies?: Proficiency[];
  starting_proficiency_options?: ProficiencyOptions;
  languages?: Language[];
  language_desc?: string;
  traits?: Trait[];
  subraces?: Subrace[];

  constructor(race: IRace) {
    this.index = race.index;
    this.level = race.level;
    this.name = race.name;
    this.url = race.url;
    this.speed = race.speed;
    this.ability_bonuses = race.ability_bonuses;
    this.alignment = race.alignment;
    this.age = race.age;
    this.size = race.size;
    this.size_description = race.size_description;
    this.starting_proficiencies = race.starting_proficiencies;
    this.starting_proficiency_options = race.starting_proficiency_options;
    this.languages = race.languages;
    this.language_desc = race.language_desc;
    this.traits = race.traits;
    this.subraces = race.subraces;
  }
}
