import { IStartingEquipment } from "./starting-equipment.interface";

export interface IStartingEquipmentOption {
  desc?: string;
  choose?: number;
  type?: string;
  from?: IStartingEquipment[];
}
