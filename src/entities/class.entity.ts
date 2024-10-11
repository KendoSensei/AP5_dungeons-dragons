export class Class {
  id: number;
  private _name: string;
  private _proficiencies: Proficiencies[];
  private _proficienciesToChoose: Proficiencies[];
  private _savingThrows: SavingThrows[];
  private _spells: Spell[];
  private _levelZeroSpells: Spell[];

  constructor(
    id: number,
    name: string,
    proficiencies: Proficiency[],
    proficienciesToChoose: Proficiency[],
    savingThrows: SavingThrows[],
    spells: Spell[],
    levelZeroSpells: Spell[],
  ) {
    this.id = id;
    this._name = name;
    this._proficiencies = proficiencies;
    this._proficienciesToChoose = proficienciesToChoose;
    this._savingThrows = savingThrows;
    this._spells = spells;
    this._levelZeroSpells = levelZeroSpells;
  }

  addSpell(spell: Spell) {
    this._spells.push(spell);
  }

  get name(): string {
    return this._name;
  }

  get proficiencies(): Proficiencies[] {
    return this._proficiencies;
  }

  get proficienciesToChoose(): Proficiencies[] {
    return this._proficienciesToChoose;
  }

  get levelZeroSpells(): Spell[] {
    return this._levelZeroSpells;
  }

  get savingThrows(): SavingThrows[] {
    return this._savingThrows;
  }

  get spells(): Spell[] {
    return this._spells;
  }
}
