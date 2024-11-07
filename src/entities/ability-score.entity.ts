import { IAbilityScore } from "../interfaces/ability-score.interface";

export class AbilityScore {
  index: string;
  name: string;
  url: string;
  level?: number;

  constructor(data: IAbilityScore) {
    this.index = data.index;
    this.name = data.name;
    this.url = data.url;
    if (data.level) this.level = data.level;
  }
}
