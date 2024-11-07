import { Alignment } from "../entities/alignment.entity";
import { DataService } from "../data/DataService";
import { Morality } from "../enum/morality.enum";
import { Order } from "../enum/order.enum";
import { Request, Response, NextFunction } from "express";

const dataService = new DataService();

export async function validateAlignmentMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { alignment } = req.body;

    if (!alignment) {
      res.status(400).json({ error: "Alignment is required" });
      return;
    }

    const [orderStr, moralityStr] = (alignment as string).split(" ");
    const order = orderStr as Order;
    const morality = moralityStr as Morality;
    const characterAlignment = new Alignment(order, morality);

    const alignmentsList = await dataService.getAlignments();
    const alignmentIndex = `${characterAlignment.order.toLowerCase()}-${characterAlignment.morale.toLowerCase()}`;
    const isValid = alignmentsList?.results.some((align) => align.index === alignmentIndex);

    if (!isValid) {
      res.status(422).json({ error: "Alignment not valid" });
      return;
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "Error validating alignment: " + (error as Error).message });
  }
}
