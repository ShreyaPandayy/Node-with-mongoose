import Joi from "joi";

exports.Validate = (req: any, res: any, cb: any) => {

    const ProductSchema: any = Joi.object({
        name: Joi.string().pattern(new RegExp('^[a-zA-z]{3,50}$')).min(3).required(),
        price: Joi.number().required(),
        quantity: Joi.number().required()
    });

    const Product: any = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    };

    const result: any = ProductSchema.validate(Product);

    !result.error ? cb() : res.send(result.error.details[0].message);

}