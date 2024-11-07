import { Alignment } from "../entities/alignment.entity";
import { DataService } from "../data/DataService";
import { Morality } from "../enum/morality.enum";
import { Order } from "../enum/order.enum";
import { Response, Request, NextFunction } from "express";

const dataService = new DataService();

export async function validateAlignmentMiddleware(req: Request, _res: Response, next: NextFunction): Promise<void> {
  try {
    const { alignment } = req.body;

    if (!alignment) {
      const error = new Error("Alignment is required");
      return next(error);
    }

    const [orderStr, moralityStr] = (alignment as string).split(" ");
    const order = orderStr as Order;
    const morality = moralityStr as Morality;
    const characterAlignment = new Alignment(order, morality);

    const alignmentsList = await dataService.getAlignments();
    let alignmentIndex: string;
    if (morality === undefined) {
      alignmentIndex = `${characterAlignment.order.toLowerCase()}`;
    } else if (order === undefined) {
      alignmentIndex = `${characterAlignment.morale.toLowerCase()}`;
    } else {
      alignmentIndex = `${characterAlignment.order.toLowerCase()}-${characterAlignment.morale.toLowerCase()}`;
    }
    const isValid = alignmentsList?.results.some((align) => align.index === alignmentIndex);

    if (!isValid) {
      const error = new Error(
        "Alignment not valid, choose one of the following: " +
          alignmentsList?.results.map((align) => align.name).join(", "),
      );
      return next(error);
    }
    next();
  } catch (error) {
    return next(error);
  }
}
