import { IRace } from "./race.interface";

export interface ISubrace extends IRace {
  index?: string;
  subname?: string;
  url?: string;
  level?: number;
}
