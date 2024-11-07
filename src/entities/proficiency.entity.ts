import { IProficiency } from "../interfaces/proficiency.interface";

export class Proficiency {
  index?: string;
  name?: string;
  url?: string;
  level?: number;

  constructor(data: IProficiency) {
    this.index = data.index;
    this.name = data.name;
    this.url = data.url;
    if (data.level) this.level = data.level;
  }
}
