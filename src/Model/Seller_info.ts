export default () => {
    const Mongoose = require("mongoose");

    const productSchema = new Mongoose.Schema({

        name: {
            type: String,
            require: true
        },
        Selling_price: {
            type: Number,
            require: true
        },
        address: {
            type: String,
            require: true
        }
    }, {
        versionKey: false
    });

    return Mongoose.model('seller_sell_info', productSchema);
}