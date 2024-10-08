const { model } = require("mongoose");
const ProductModel = require("../models/productModel");

// creating product
const createProduct = async(req, res) => {
    try{
        const result = await ProductModel.create(req.body);
        res.status(200).json(result);
    }
    catch{
        res.status(500).json(err);
    }
};

// read products
const returnProducts = async(req, res) => {
    try{
        const result = await ProductModel.find();
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

// update products
const updateProduct = async(req, res) => {
    try{
        const id = req.params.id;
        const productExist = await ProductModel.findOne({_id: id});

        if (!productExist){
            return res.status(404).json({message: "Product not found."});
        }

        const result = await ProductModel.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(result);
    }
    catch (err){
        res.status(500).json(err);
    }
};

// Delete products
const deleteProduct = async(req, res) => {
    try{
        const id = req.params.id;
        const productExist = await ProductModel.findOne({_id: id});

        if (!productExist){
            return res.status(404).json({message: "Product not found."});
        }

        const result = await ProductModel.findByIdAndDelete(id);
        res.status(200).json({message: "Product successfully deleted."});
    }
    catch (err){
        res.status(500).json(err);
    }
};

module.exports = { createProduct, returnProducts, updateProduct, deleteProduct };