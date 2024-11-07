import { Race } from "./race.entity";
import { ISubrace } from "../interfaces/subrace.interface";

export class Subrace extends Race {
  private _subName?: string;
  index?: string;
  url?: string;
  level?: number;

  constructor(racename: string, data: ISubrace) {
    super({ ...data, name: racename });
    this._subName = data.subname;
    this.index = data.index;
    this.url = data.url;
    this.level = data.level;
  }

  get subName(): string {
    return <string>this._subName;
  }
}
