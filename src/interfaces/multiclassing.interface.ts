import { IProficiency, IProficiencyChoice } from "./proficiency.interface";
import { IAbilityScore } from "./ability-score.interface";

export interface IMulticlassingPrerequisite {
  ability_score: IAbilityScore;
  minimum_score: number;
}

export interface IMulticlassingPrerequesiteOptions {
  desc: string;
  choose: number;
  type: string;
  from: IAbilityScore[];
}

export interface IMulticlassing {
  prerequisites?: IMulticlassingPrerequisite[];
  prerequisite_options?: IMulticlassingPrerequesiteOptions;
  proficiencies?: IProficiency[];
  proficiency_choices?: IProficiencyChoice[];
}
