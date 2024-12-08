import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import { getProductByIdService, getProductsService } from "../services/products.service";
import { parse } from "path";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);
export const getProductById = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductByIdService(parseInt(id));
    res.json(product);
  }
);