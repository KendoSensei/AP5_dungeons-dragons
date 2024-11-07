import { Race } from "./entities/race.entities";
import { Alignment } from "../entities/alignment.entity";
import { Attribute } from "../../dist/entities/attribute";
import { Class } from "../../dist/entities/class.entity";

declare global {
  namespace Express {
    interface Request {
      characterRace?: Race;
      characterAlignment?: Alignment;
      characterAttributes?: Attribute[];
      characterClass?: Class;
    }
  }
}
