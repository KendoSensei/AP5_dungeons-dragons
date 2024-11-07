import { Race } from "./race.entity";
import { ISubrace } from "../interfaces/subrace.interface";
import { ITrait } from "../interfaces/trait.interface";

export class Subrace extends Race {
  private _subName?: string;
  private _subTraits?: ITrait[];

  constructor(data: ISubrace) {
    super(data);
    this._subName = data.subname;
    this._subTraits = data.traits;
  }

  get subName(): string {
    return <string>this._subName;
  }

  get subTraits(): ITrait[] {
    return <ITrait[]>this._subTraits;
  }
}
