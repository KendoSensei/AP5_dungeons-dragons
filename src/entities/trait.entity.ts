import { ITrait } from "../interfaces/trait.interface";

export class Trait {
  index?: string;
  level?: number;
  name?: string;
  url?: string;

  constructor(data: ITrait) {
    this.index = data.index;
    this.level = data.level;
    this.name = data.name;
    this.url = data.url;
  }
}
