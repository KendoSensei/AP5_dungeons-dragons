import { DataService } from "../data/DataService";

export class GetCreationInfoUseCase {
  constructor(private dataService: DataService) {}

  async execute() {
    const races = await this.dataService.getRaces();
    const classes = await this.dataService.getClasses();
    const alignments = await this.dataService.getAlignments();

    return {
      races,
      classes,
      alignments,
    };
  }
}
