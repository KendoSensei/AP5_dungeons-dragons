import { Race } from "./race.entities";
import { RaceDependencies } from "./race.entities";

type SubracesDependencies = {
  race: RaceDependencies;
  subName: string;
  subTraits: string[];
};

export class Subraces extends Race {
  private _subName: string;
  private _subTraits: string[];

  constructor({ race, subName, subTraits }: SubracesDependencies) {
    super(race);
    this._subName = subName;
    this._subTraits = subTraits;
  }

  get subName(): string {
    return this._subName;
  }

  get subTraits(): string[] {
    return this._subTraits;
  }
}
