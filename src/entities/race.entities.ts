import { Proficiency } from "./proficiency.entity";
import { Subraces } from "./subraces.entity";

export type RaceDependencies = {
  id: number;
  name: string;
  taille: number;
  subraces: Subraces[];
  proficiency: Proficiency[];
  proficiencesToChoose: Proficiency[];
  languages: string[];
  languagesToChoose: string[];
  traits: Trait[];
  attributesBonus: Attribute;
};

export class Race {
  private _id: number;
  private _name: string;
  private _taille: number;
  private _subraces: Subraces[];
  private _proficiency: Proficiency[];
  private _proficiencesToChoose: Proficiency[];
  private _languages: string[];
  private _languagesToChoose: string[];
  private _traits: Trait[];
  private _attributesBonus: Attribute;

  constructor({
    id,
    name,
    taille,
    subraces,
    proficiency,
    proficiencesToChoose,
    languages,
    languagesToChoose,
    traits,
    attributesBonus,
  }: RaceDependencies) {
    this._id = id;
    this._name = name;
    this._taille = taille;
    this._subraces = subraces;
    this._proficiency = proficiency;
    this._proficiencesToChoose = proficiencesToChoose;
    this._languages = languages;
    this._languagesToChoose = languagesToChoose;
    this._traits = traits;
    this._attributesBonus = attributesBonus;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get taille(): number {
    return this._taille;
  }

  get subraces(): Subraces[] {
    return this._subraces;
  }

  get proficiency(): Proficiency[] {
    return this._proficiency;
  }

  get proficiencesToChoose(): Proficiency[] {
    return this._proficiencesToChoose;
  }

  get languages(): string[] {
    return this._languages;
  }

  get languagesToChoose(): string[] {
    return this._languagesToChoose;
  }

  get traits(): Traits[] {
    return this._traits;
  }

  get attributesBonus(): Attribute {
    return this._attributesBonus;
  }

  addSubraces(subraces: Subraces): void {
    this.subraces.push(subraces);
  }

  chooseProficiency(): void {
    /* to be implemented */
  }

  chooseLanguage(): void {
    /* to be implemented */
  }
}
