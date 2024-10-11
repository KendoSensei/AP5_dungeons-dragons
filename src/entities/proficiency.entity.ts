export class Proficiency {
  id: number;
  private _name: string;
  private _description: string;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this._name = name;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }
}
