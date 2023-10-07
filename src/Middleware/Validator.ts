import Joi from "joi";

exports.Validate = (req: any, res: any, cb: any) => {
  const SellerSchema: any = Joi.object({
    name: Joi.string()
      .pattern(new RegExp("^[a-zA-z]{3,50}$"))
      .min(3)
      .required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
    ratings: Joi.number().required(),
    email: Joi.string().email().required(),
  });

  const Seller: any = {
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    ratings: req.body.ratings,
    email: req.body.quantity.email,
  };

  const result: any = SellerSchema.validate(Seller);

  !result.error ? cb() : res.send(result.error.details[0].message);
};
