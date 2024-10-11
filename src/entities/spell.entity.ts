import { School } from "../enum/school.enum";

export class Spell {
  private name: string;
  private level: number;
  private school: School;

  constructor(name: string, level: number, school: School) {
    this.name = name;
    this.level = level;
    this.school = school;
  }

  get spellName(): string {
    return this.name;
  }

  get spellLevel(): number {
    return this.level;
  }

  get spellSchool(): School {
    return this.school;
  }
}
