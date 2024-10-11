import { Morality } from "enum/morality.ts";
import { Order } from "enum/order.ts";

export class alignment {
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
