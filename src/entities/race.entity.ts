import { ProficiencyOptions } from "./proficiency-options.entity";
import { Subrace } from "./subrace.entity";
import { ISubrace } from "../interfaces/subrace.interface";
import { IRace } from "../interfaces/race.interface";
import { AbilityBonus } from "./ability-bonus.entity";
import { Proficiency } from "./proficiency.entity";
import { Language } from "./language.entity";
import { Trait } from "./trait.entity";

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
    if (race.index) this.index = race.index;
    if (race.level) this.level = race.level;
    this.name = race.name;
    if (race.url) this.url = race.url;
    if (race.speed) this.speed = race.speed;
    if (race.ability_bonuses) this.ability_bonuses = race.ability_bonuses;
    if (race.alignment) this.alignment = race.alignment;
    if (race.age) this.age = race.age;
    if (race.size) this.size = race.size;
    if (race.size_description) this.size_description = race.size_description;
    if (race.starting_proficiencies) this.starting_proficiencies = race.starting_proficiencies;
    if (race.starting_proficiency_options)
      this.starting_proficiency_options = new ProficiencyOptions(race.starting_proficiency_options);
    if (race.languages) this.languages = race.languages;
    if (race.language_desc) this.language_desc = race.language_desc;
    if (race.traits) this.traits = race.traits;
    if (race.subraces) this.initializeSubraces(race.subraces);
  }

  private async initializeSubraces(subracesData: ISubrace[] = []) {
    const module = await import("./subrace.entity");
    this.subraces = await Promise.all(
      subracesData.map(async (subraceData) => {
        const Subrace = module.Subrace;
        return new Subrace(this.name, subraceData);
      }),
    );
  }
}
