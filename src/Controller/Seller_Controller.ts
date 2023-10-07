import { Request, Response } from "express";
import product_model from "../Model/Product_info";
import SellerInfo from "../Model/Seller_info";

const product = product_model();
const seller = SellerInfo();

exports.NotFound = (req: Request, res: Response) =>
  res.status(404).send({ message: "invalid URL!" });

exports.insertProduct = async (req: Request, res: Response) => {
  const data = new product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  const result = await data.save();

  res.send({ message: "new Product has been added", result });
};

exports.listProduct = async (req: Request, res: Response) => {
  const data = await product.find();
  data.length
    ? res.send({ Message: "Available Product data", data })
    : res.send({ message: "No Product data to display" });
};

exports.removeProduct = async (req: Request, res: Response) => {
  const product_id: string = req.params.id;
  const deleted_data = await product.findByIdAndDelete(product_id);

  const msg_string: any = deleted_data
    ? { message: "data delete sucessfull!", Deleted_data: deleted_data }
    : { message: "No data to Delete" };

  res.send(msg_string);
};

exports.removeSeller = async (req: Request, res: Response) => {
  const seller_id: string = req.params.id;
  const deleted_data = await seller.findByIdAndDelete(seller_id);

  const msg_string: any = deleted_data
    ? { message: "data delete sucessfull!", Deleted_data: deleted_data }
    : { message: "No data to Delete" };

  res.send(msg_string);
};

exports.showProfit = async (req: Request, res: Response) => {
  const profit: any = await product.aggregate([
    {
      $project: {
        name: 1,
        _id: 0,
        total_profit: { $multiply: ["$price", "$quantity"] },
      },
    },
  ]);
  
  profit.length
    ? res.send({ Message: "Profit of product ", profit })
    : res.send({ message: "No Product to display" });
};
