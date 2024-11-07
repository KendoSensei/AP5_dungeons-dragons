import { Proficiency } from "./proficiency.entity";
import { IMulticlassing } from "../interfaces/multiclassing.interface";
import { MulticlassingPrerequisite } from "./multiclassing-prerequisite.entity";
import { MulticlassingPrerequisiteOptions } from "./multiclassing-prerequisite-options.entity";
import { ProficiencyChoice } from "./proficiency-choice.entity";

export class Multiclassing {
  prerequisites?: MulticlassingPrerequisite[];
  prerequisite_options?: MulticlassingPrerequisiteOptions;
  proficiencies?: Proficiency[];
  proficiency_choices?: ProficiencyChoice[];

  constructor(data: IMulticlassing) {
    if (data.prerequisites) this.prerequisites = data.prerequisites;
    if (data.prerequisite_options) this.prerequisite_options = data.prerequisite_options;
    if (data.proficiencies) this.proficiencies = data.proficiencies;
    if (data.proficiency_choices) this.proficiency_choices = data.proficiency_choices;
  }
}
