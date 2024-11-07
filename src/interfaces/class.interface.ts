import { IProficiency, IProficiencyChoice } from "./proficiency.interface";
import { IMulticlassing } from "./multiclassing.interface";
import { ISpellcasting } from "./spellcasting.interface";
import { IStartingEquipment } from "./starting-equipment.interface";
import { IStartingEquipmentOption } from "./starting-equipment-option.interface";
import { ISubclass } from "./subclass.interface";
import { ISavingThrows } from "./saving-throws.interface";

export interface IClass {
  index?: string;
  level?: number;
  name?: string;
  url?: string;
  hit_die?: number;
  class_levels?: string;
  multi_classing?: IMulticlassing;
  spellcasting?: ISpellcasting;
  spells?: string;
  starting_equipment?: IStartingEquipment[];
  starting_equipment_options?: IStartingEquipmentOption[];
  proficiency_choices?: IProficiencyChoice[];
  proficiencies?: IProficiency[];
  saving_throws?: ISavingThrows[];
  subclasses?: ISubclass[];
}

export interface ClassesResponse {
  count: number;
  results: IClass[];
}
