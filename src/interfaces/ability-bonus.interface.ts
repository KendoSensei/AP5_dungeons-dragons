import { IAbilityScore } from "./ability-score.interface";

export interface IAbilityBonus {
  ability_score: IAbilityScore;
  bonus: number;
}
