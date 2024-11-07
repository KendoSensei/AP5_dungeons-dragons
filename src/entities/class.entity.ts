import { Proficiency } from "./proficiency.entity";
import { SavingThrows } from "../enum/saving-throws.enum";
import { IStartingEquipment } from "../interfaces/starting-equipment.interface";
import { IStartingEquipmentOption } from "../interfaces/starting-equipment-option.interface";
import { IProficiencyChoice } from "../interfaces/proficiency.interface";
import { Multiclassing } from "./multiclassing.entity";
import { Spellcasting } from "./spellcasting.entity";
import { ProficiencyChoice } from "./proficiency-choice.entity";
import { Subclass } from "./subclass.entity";
import { IClass } from "../interfaces/class.interface";
import { StartingEquipment } from "./starting-equipment.entity";
import { StartingEquipmentOption } from "./starting-equipment-option.entity";

export class ClassEntity {
  id?: string;
  private _name?: string;
  private _hitDie?: number;
  private _classLevels?: string;
  private _multiClassing?: Multiclassing;
  private _spellcasting?: Spellcasting;
  private _spells?: string;
  private _startingEquipment?: StartingEquipment[];
  private _startingEquipmentOptions?: StartingEquipmentOption[];
  private _proficiencyChoices?: ProficiencyChoice[];
  private _proficiencies?: Proficiency[];
  private _savingThrows?: SavingThrows[];
  private _subclasses?: Subclass[];

  constructor(data: IClass) {
    this.id = data.index;
    this._name = data.name;
    this._hitDie = data.hit_die;
    this._classLevels = data.class_levels;
    this._multiClassing = data.multi_classing;
    this._spellcasting = data.spellcasting;
    this._spells = data.spells;
    this._startingEquipment = data.starting_equipment;
    this._startingEquipmentOptions = data.starting_equipment_options;
    this._proficiencyChoices = data.proficiency_choices;
    this._proficiencies = data.proficiencies;
    // this._savingThrows = data.saving_throws?.map((savingThrow) => SavingThrows[savingThrow.index]);
    this._subclasses = data.subclasses?.map((subclass) => new Subclass(subclass));
  }

  get name(): string {
    return <string>this._name;
  }

  get hitDie(): number | undefined {
    return this._hitDie;
  }

  get classLevels(): string | undefined {
    return this._classLevels;
  }

  get multiClassing(): Multiclassing | undefined {
    return this._multiClassing;
  }

  get spellcasting(): Spellcasting | undefined {
    return this._spellcasting;
  }

  get spells(): string | undefined {
    return this._spells;
  }

  get startingEquipment(): IStartingEquipment[] | undefined {
    return this._startingEquipment;
  }

  get startingEquipmentOptions(): IStartingEquipmentOption[] | undefined {
    return this._startingEquipmentOptions;
  }

  get proficiencyChoices(): IProficiencyChoice[] | undefined {
    return this._proficiencyChoices;
  }

  get proficiencies(): Proficiency[] | undefined {
    return this._proficiencies;
  }

  get savingThrows(): SavingThrows[] | undefined {
    return this._savingThrows;
  }

  get subclasses(): Subclass[] | undefined {
    return this._subclasses;
  }
}
