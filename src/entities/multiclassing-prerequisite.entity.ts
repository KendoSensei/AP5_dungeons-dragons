import { AbilityScore } from "./ability-score.entity";
import { IMulticlassingPrerequisite } from "../interfaces/multiclassing.interface";

export class MulticlassingPrerequisite {
  ability_score: AbilityScore;
  minimum_score: number;

  constructor(data: IMulticlassingPrerequisite) {
    this.ability_score = new AbilityScore(data.ability_score);
    this.minimum_score = data.minimum_score;
  }
}
