import { Request, Response } from "express";
import product_model from "../Model/Product_info";
import SellerInfo from "../Model/Seller_info";

const product = product_model();
const seller = SellerInfo();

exports.NotFound = (req: Request, res: Response) =>
  res.status(404).send({ message: "invalid URL!" });

// Controller to insert product
exports.insertProduct = async (req: Request, res: Response) => {
  const data = new product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  const result = await data.save();

  res.send({ message: "new Product has been added", result });
};

// To get list of products
exports.listProduct = async (req: Request, res: Response) => {
  const data = await product.find();

  if (data.length) {
    return res.status(200).send({ message: "Available Product data", data });
  }

  return res.status(200).send({ message: "No Product data to display" });
};

// To remove product by id
exports.removeProduct = async (req: Request, res: Response) => {
  const product_id: string = req.params.id;
  const deletedData = await product.findByIdAndDelete(product_id);

  if (deletedData) {
    return res.status(200).send({
      message: "Product delete sucessfully!",
      deletedData,
    });
  }

  return res.status(200).send({ message: "No data to Delete" });
};

// To remove seller by id
exports.removeSeller = async (req: Request, res: Response) => {
  const seller_id: string = req.params.id;
  const deletedData = await seller.findByIdAndDelete(seller_id);

  if (deletedData) {
    return res.status(200).send({
      message: "Seller deleted sucessfully!",
      deletedData,
    });
  }

  return res.status(200).send({ message: "No data to Delete" });
};

// To calclulate profit
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

  if (profit.length) {
    return res.status(200).send({ message: "Profit of product ", profit });
  }

  return res.status(200).send({ message: "No Product to display" });
};
