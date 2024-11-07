import { JsonDB, Config } from "node-json-db";
import { join } from "path";
import { Character } from "../entities/character.entity";

const dbPath = join(__dirname, "../../db");

const db = new JsonDB(new Config(dbPath, true, true, "/"));

async function initializeDb() {
  try {
    const characters: Character[] = await db.getData("/characters");
    if (!characters) {
      db.push("/characters", []);
    }
  } catch (error) {
    await db.push("/characters", []);
  }
}

initializeDb().catch((err) => {
  console.error("Failed to initialize the database:", err);
});

export default db;
