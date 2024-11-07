import { ISubclass } from "../interfaces/subclass.interface";
import { ClassEntity } from "./class.entity";

export class Subclass extends ClassEntity {
  index?: string;
  level?: number;
  subname?: string;
  url?: string;

  constructor(className: string, data: ISubclass) {
    super({ ...data, name: className });
    this.index = data.index;
    this.level = data.level;
    this.subname = data.subname;
    this.url = data.url;
  }
}
