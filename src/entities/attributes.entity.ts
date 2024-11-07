import { IAttributes } from "../interfaces/attribute.interface";

export class Attributes {
  private _strength: number;
  private _dexterity: number;
  private _constitution: number;
  private _intelligence: number;
  private _wisdom: number;
  private _charisma: number;

  constructor(data: IAttributes) {
    this._strength = data.strength;
    this._dexterity = data.dexterity;
    this._constitution = data.constitution;
    this._intelligence = data.intelligence;
    this._wisdom = data.wisdom;
    this._charisma = data.charisma;
  }

  public get strength(): number {
    return this._strength;
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
