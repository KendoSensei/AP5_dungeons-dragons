import { StartingEquipment } from "./starting-equipment.entity";
import { IStartingEquipmentOption } from "../interfaces/starting-equipment-option.interface";

export class StartingEquipmentOption {
  desc?: string;
  choose?: number;
  type?: string;
  from?: StartingEquipment[];

  constructor(data: IStartingEquipmentOption) {
    this.desc = data.desc;
    this.choose = data.choose;
    this.type = data.type;
    if (data.from) this.from = data.from.map((equipment) => new StartingEquipment(equipment));
  }
}
