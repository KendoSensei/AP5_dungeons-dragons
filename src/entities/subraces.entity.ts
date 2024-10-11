type subracesDependencies = {
  name: string;
  traits: Trait[];
};

export class Subraces {
  private _name: string;
  private _traits: Trait[];

  constructor({ name, traits }: subracesDependencies) {
    this._name = name;
    this._traits = traits;
  }

  get name(): String {
    return this._name;
  }

  get traits(): Trait[] {
    return this._traits;
  }
}
