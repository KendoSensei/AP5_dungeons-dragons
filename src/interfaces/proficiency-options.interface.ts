import { IProficiency } from "./proficiency.interface";

export interface IProficiencyOptions {
  desc?: string;
  choose?: number;
  type?: string;
  from?: IProficiency[];
}
