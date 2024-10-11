type RaceDependencies = {
  id: number;
  name: String;
  taille: number;
  subraces: Subspecies[];
  proficiency: Proficiency[];
  proficiencesToChoose: Proficiency[];
  languages: String[];
  languagesToChoose: String[];
  traits: Trait[];
  attributesBonus: Attribute;
};

export class Race {
  private _id: number;
  private _name: String;
  private _taille: number;
  private _subraces: Subspecies[];
  private _proficiency: Proficiency[];
  private _proficiencesToChoose: Proficiency[];
  private _languages: String[];
  private _languagesToChoose: String[];
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

  get name(): String {
    return this._name;
  }

  get taille(): number {
    return this._taille;
  }

  get subraces(): Subspecies[] {
    return this._subraces;
  }

  get proficiency(): Proficiency[] {
    return this._proficiency;
  }

  get proficiencesToChoose(): Proficiency[] {
    return this._proficiencesToChoose;
  }

  get languages(): String[] {
    return this._languages;
  }

  get languagesToChoose(): String[] {
    return this._languagesToChoose;
  }

  get traits(): Traits[] {
    return this._traits;
  }

  get attributesBonus(): Attribute {
    return this._attributesBonus;
  }

  addSubspecies(subspecies: Subspecies): void {
    this.subraces.push(subspecies);
  }

  chooseProficiency(): void {}

  chooseLanguage(): void {}
}
