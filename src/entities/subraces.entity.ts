import { Race } from "./race.entities";
import { RaceDependencies } from "./race.entities";

type subracesDependencies = {
  race: RaceDependencies;
  subName: string;
  subTraits: Trait[];
};

export class Subraces extends Race {
  private _subName: string;
  private _subTraits: Trait[];

  constructor({ race, subName, subTraits }: subracesDependencies) {
    super(race);
    this._subName = subName;
    this._subTraits = subTraits;
  }

  get subName(): string {
    return this._subName;
  }

  get subTraits(): Trait[] {
    return this._subTraits;
  }
}
