type attributeDependencies = {
  strenght: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export class Attribute {
  private _strenght: number;
  private _dexterity: number;
  private _constitution: number;
  private _intelligence: number;
  private _wisdom: number;
  private _charisma: number;
  constructor({ strenght, dexterity, constitution, intelligence, wisdom, charisma }: attributeDependencies) {
    this._strenght = strenght;
    this._dexterity = dexterity;
    this._constitution = constitution;
    this._intelligence = intelligence;
    this._wisdom = wisdom;
    this._charisma = charisma;
  }

  public get strenght(): number {
    return this._strenght;
  }
  public get dexterity(): number {
    return this._dexterity;
  }

  public get constitution(): number {
    return this._constitution;
  }

  public get intelligence(): number {
    return this._intelligence;
  }

  public get wisdom(): number {
    return this._wisdom;
  }

  public get charisma(): number {
    return this._charisma;
  }
}
