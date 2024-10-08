const { mongo, default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    description: {
        type: String,
        required: true,
        minlength: 15,
    },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;