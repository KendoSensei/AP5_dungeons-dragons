import { Race } from "./race.entities";
import { Alignment } from "./alignment.entity";
import { Attribute } from "./attribute";
import { Skills } from "./skills.entity";
import { Equipment } from "./equipment.entity";
import { Skill } from "./skill.entity";

export class Character {
  private _name: string;
  private _image: string;
  private _race: Race;
  private _alignment: Alignment;
  private _attributes: Attribute;
  private _skills: Skills;
  private _equipment: Equipment;

  constructor(
    name: string,
    image: string,
    race: Race,
    alignment: Alignment,
    attributes: Attribute,
    skills: Skills,
    equipment: Equipment,
  ) {
    this._name = name;
    this._image = image;
    this._race = race;
    this._alignment = alignment;
    this._attributes = attributes;
    this._skills = skills;
    this._equipment = equipment;
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

  get skills(): Skills {
    return this._skills;
  }

  get equipment(): Equipment {
    return this._equipment;
  }

  addskill(skill: Skill): void {
    this._skills.add(skill);
  }

  modifyattribute(attribute: Attribute): void {
    this._attributes = attribute;
  }

  saveToUserAccount(): void {}

  getPDF(): void {}
}
