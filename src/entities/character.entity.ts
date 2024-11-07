import { Race } from "./race.entity";
import { Alignment } from "./alignment.entity";
import { Attributes } from "./attributes.entity";
import { ClassEntity } from "./class.entity";

export class Character {
  private _name: string;
  private _image: string;
  private _race: Race;
  private _alignment: Alignment;
  private _attributes: Attributes;
  private _class: ClassEntity;

  constructor(
    name: string,
    image: string,
    race: Race,
    alignment: Alignment,
    attributes: Attributes,
    charClass: ClassEntity,
  ) {
    this._name = name;
    this._image = image;
    this._race = race;
    this._alignment = alignment;
    this._attributes = attributes;
    this._class = charClass;
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

  get attributes(): Attributes {
    return this._attributes;
  }

  get charClass(): ClassEntity {
    return this._class;
  }
}
