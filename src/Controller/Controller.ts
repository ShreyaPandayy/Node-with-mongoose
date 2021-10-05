import product_model from '../Modal/Product_info';
const product = product_model();

exports.NotFound = (req: any, res: any) => res.send({ message: 'invalid URL!' });

exports.insertProduct = async (req: any, res: any) => {

    const data = new product({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    });

    const result = await data.save();

    res.send({ message: "new Product has been added", result });
}

exports.listProduct = async (req: any, res: any) => {

    const data = await product.find();
    data.length ? res.send({ Message: "Available Product data", data }) : res.send({ message: "No Product data to display" });
}

exports.removeProduct = async (req: any, res: any) => {

    const product_id: string = req.params.id;
    const deleted_data = await product.findByIdAndDelete(product_id);

    const msg_string: any = deleted_data
        ? { message: "data delete sucessfull!", Deleted_data: deleted_data }
        : { message: "No data to Delete" };

    res.send(msg_string);
};

exports.showProfit = async (req: any, res: any) => {

    const profit: any = await product.aggregate([
        { $project: { name: 1, _id: 0, 'total_profit': { $multiply: ['$price', '$quantity'] } } }
    ])
    profit.length ? res.send({ Message: "Profit of product ", profit }) : res.send({ message: "No Product to display" });
};
