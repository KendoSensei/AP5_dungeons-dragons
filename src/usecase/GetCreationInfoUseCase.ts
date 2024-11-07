import { DataService } from "../data/DataService";

export class GetCreationInfoUseCase {
  constructor(private dataService: DataService) {}

  async execute() {
    const races = await this.dataService.getRaces();
    const classes = await this.dataService.getClasses();
    const alignments = await this.dataService.getAlignments();
    const skills = await this.dataService.getSkills();
    const traits = await this.dataService.getTraits();
    const proficiencies = await this.dataService.getProficiencies();
    const subraces = await this.dataService.getSubraces();

    return {
      races,
      classes,
      alignments,
      skills,
      traits,
      proficiencies,
      subraces,
    };
  }
}
