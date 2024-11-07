import { Race } from "./race.entity";
import { ISubrace } from "../interfaces/subrace.interface";

export class Subraces extends Race {
  private _subName: string;
  private _subTraits: string[];

  constructor(data: ISubrace) {
    super(data);
    this._subName = data.name;
    this._subTraits = data..traits;
  }

  get subName(): string {
    return this._subName;
  }

  get subTraits(): string[] {
    return this._subTraits;
  }
}
