import { Race } from "./entities/race.entities";
import { Alignment } from "../entities/alignment.entity";

declare global {
  namespace Express {
    interface Request {
      characterRace?: Race;
      characterAlignment?: Alignment;
    }
  }
}
