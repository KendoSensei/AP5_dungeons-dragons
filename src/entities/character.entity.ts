import { Race } from "./race.entities";
import { Alignment } from "./alignment.entity";
import { Attribute } from "./attribute";

export class Character {
  private _name: string;
  private _image: string;
  private _race: Race;
  private _alignment: Alignment;
  private _attributes: Attribute;

  constructor(name: string, image: string, race: Race, alignment: Alignment, attributes: Attribute) {
    this._name = name;
    this._image = image;
    this._race = race;
    this._alignment = alignment;
    this._attributes = attributes;
  }

  get name(): string {
    return this._name;
  }

  get image(): string {
    return this._image;
  }

  get race(): Race {
    return this._race;
  }

  get alignment(): Alignment {
    return this._alignment;
  }

  get attributes(): Attribute {
    return this._attributes;
  }

  modifyattribute(attribute: Attribute): void {
    this._attributes = attribute;
  }

  saveToUserAccount(): void {}

  getPDF(): void {}
}
