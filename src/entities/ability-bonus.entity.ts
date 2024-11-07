import { IAbilityBonus } from "../interfaces/ability-bonus.interface";
import { AbilityScore } from "./ability-score.entity";

export class AbilityBonus {
  ability_score: AbilityScore;
  bonus: number;

  constructor(data: IAbilityBonus) {
    this.ability_score = data.ability_score;
    this.bonus = data.bonus;
  }
}
