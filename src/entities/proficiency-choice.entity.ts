import { IProficiencyChoice } from "../interfaces/proficiency.interface";
import { Proficiency } from "./proficiency.entity";

export class ProficiencyChoice {
  desc?: string;
  choose?: number;
  type?: string;
  from?: Proficiency[];

  constructor(data: IProficiencyChoice) {
    if (data.desc) this.desc = data.desc;
    if (data.choose) this.choose = data.choose;
    if (data.type) this.type = data.type;
    if (data.from) this.from = data.from;
  }
}
