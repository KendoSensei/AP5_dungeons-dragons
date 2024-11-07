import { IAttributes } from "../interfaces/attribute.interface";

export class AttributeEntity {
  private _strength: number;
  private _dexterity: number;
  private _constitution: number;
  private _intelligence: number;
  private _wisdom: number;
  private _charisma: number;

  constructor({ strength, dexterity, constitution, intelligence, wisdom, charisma }: IAttributes) {
    this._strength = strength;
    this._dexterity = dexterity;
    this._constitution = constitution;
    this._intelligence = intelligence;
    this._wisdom = wisdom;
    this._charisma = charisma;
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
