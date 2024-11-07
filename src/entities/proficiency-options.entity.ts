import { Proficiency } from "./proficiency.entity";
import { IProficiencyOptions } from "../interfaces/proficiency-options.interface";

export class ProficiencyOptions {
  desc?: string;
  choose?: number;
  type?: string;
  from?: Proficiency[];

  constructor(data: IProficiencyOptions) {
    if (data.desc) this.desc = data.desc;
    if (data.choose) this.choose = data.choose;
    if (data.type) this.type = data.type;
    if (data.from) this.from = data.from;
  }
}
