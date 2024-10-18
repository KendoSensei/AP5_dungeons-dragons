import { UseCase } from "./UseCase";

export class FindCharacterUseCase implements UseCase {
  execute(): void {
    console.log("Finding character...");
  }
}
