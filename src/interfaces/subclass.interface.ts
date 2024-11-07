import { IClass } from "./class.interface";

export interface ISubclass extends IClass {
  index?: string;
  level?: number;
  subname?: string;
  url?: string;
}
