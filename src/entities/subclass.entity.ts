import { ISubclass } from "../interfaces/subclass.interface";
import { ClassEntity } from "./class.entity";

export class Subclass extends ClassEntity {
  index?: string;
  level?: number;
  subname?: string;
  url?: string;

  constructor(data: ISubclass) {
    super(data);
    this.index = data.index;
    this.level = data.level;
    this.subname = data.subname;
    this.url = data.url;
  }
}
