import { Morality } from "../enum/morality.enum";
import { Order } from "../enum/order.enum";

export class Alignment {
  private _morale: Morality;
  private _order: Order;

  constructor(morale: Morality, order: Order) {
    this._morale = morale;
    this._order = order;
  }

  public get morale(): Morality {
    return this._morale;
  }

  public get order(): Order {
    return this._order;
  }
}
