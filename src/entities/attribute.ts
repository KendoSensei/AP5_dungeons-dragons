type attributeDependencies = {
  strenght: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export class attribute {
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

  public set strenght(v: number) {
    this._strenght = v;
  }
  public get strenght(): number {
    return this._strenght;
  }
  public set dexterity(v: number) {
    this._dexterity = v;
  }
  public get dexterity(): number {
    return this._dexterity;
  }

  public set constitution(v: number) {
    this._constitution = v;
  }
  public get constitution(): number {
    return this._constitution;
  }

  public set intelligence(v: number) {
    this._intelligence = v;
  }

  public get intelligence(): number {
    return this._intelligence;
  }

  public set wisdom(v: number) {
    this._wisdom = v;
  }
  public get wisdom(): number {
    return this._wisdom;
  }

  public set charisma(v: number) {
    this._charisma = v;
  }

  public get charisma(): number {
    return this._charisma;
  }
}
