const productModel = require("../models/Product")
exports.createProduct = async (req, res, next) => {
    try {
        const result = await productModel.create(req.body);
        res.status(201).json(result);
    }
    catch(error) {
        next(error)
    }
};

exports.getProducts = async(req, res, next) => {
    try {
        const result = await productModel.findAll({});
        res.status(200).json(result);    
    }
    catch (error) {
        next(error);
    }
    
}

exports.getProductById = async(req, res, next) => {
    try {
        const result = await productModel.findById(req.params.productId);
        if (result) {
            res.status(200).json(result);
        }
        else{
            res.status(404).send();
        }
    }
    catch (error) {
        next(error);
    }
}

exports.updateProduct = async(req, res, next) => {
    try {
        const result = await productModel.findByIdAndUpdate(
            req.params.productId,
            req.body,
            {new: true}
            );
        if(result){
            res.status(200).json(result)
        }
        else {
            res.status(404).send();
        }
        
    }
    catch (error) {
        next(error);
    }
}

exports.deleteProduct = async(req, res, next) => {
    try {
        const result = await productModel.findByIdAndDelete(req.params.productId,);
        if(result){
            res.status(200).json(result)
        }
        else {
            res.status(404).send();
        }
        
    }
    catch (error) {
        next(error);
    }
}