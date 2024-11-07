import { IStartingEquipment } from "../interfaces/starting-equipment.interface";

export class StartingEquipment {
  quantity?: number;
  equipment?: {
    index?: string;
    name?: string;
    url?: string;
    level?: number;
  };

  constructor(data: IStartingEquipment) {
    this.quantity = data.quantity;
    this.equipment = data.equipment;
  }
}
