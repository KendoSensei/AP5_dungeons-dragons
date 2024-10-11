import { Race } from "./race.entity";
import { Alignment } from "./alignment.entity";
import { Attributes } from "./attributes.entity";
import { Skills } from "./skills.entity";
import { Equipment } from "./equipment.entity";
import { Skill } from "./skill.entity";
import { Attribute } from "./attribute.entity";

export class character {
  private _name: string;
  private _image: string;
  private _race: Race;
  private _alignment: Alignment;
  private _attributes: Attributes;
  private _skills: Skills;
  private _equipment: Equipment;

  constructor(
    name: string,
    image: string,
    race: Race,
    alignment: Alignment,
    attributes: Attributes,
    skills: Skills,
    equipment: Equipment,
  ) {
    this._name = name;
    this._image = image;
    this._race = Race();
    this._alignment = Alignment();
    this._attributes = Attributes();
    this._skills = Skills();
    this._equipment = Equipment();
  }

  get name(): string {
    return this._name;
  }

  get image(): string {
    return this._image;
  }

  addskill(skill: Skill): void {
    this._skills.add(skill);
  }

  modifyattribute(attribute: Attribute): void {
    this._attributes.modify(attribute);
  }

  saveToUserAccount(): void {}

  getPDF(): void {}
}
