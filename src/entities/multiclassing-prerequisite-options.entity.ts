import { IAbilityScore } from "../interfaces/ability-score.interface";
import { IMulticlassingPrerequesiteOptions } from "../interfaces/multiclassing.interface";

export class MulticlassingPrerequisiteOptions {
  desc?: string;
  choose?: number;
  type?: string;
  from?: IAbilityScore[];

  constructor(data: IMulticlassingPrerequesiteOptions) {
    if (data.desc) this.desc = data.desc;
    if (data.choose) this.choose = data.choose;
    if (data.type) this.type = data.type;
    if (data.from) this.from = data.from;
  }
}
