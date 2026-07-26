const productController = require("../../controller/products")
const productModel = require("../../models/Product")
const httpMocks = require("node-mocks-http")
const newProduct = require("../data/new_product.json")
const allProducts = require("../data/all_products.json")

productModel.create = jest.fn();
productModel.findAll = jest.fn();
productModel.findById = jest.fn();
productModel.findByIdAndUpdate = jest.fn();
productModel.findByIdAndDelete = jest.fn();

let req
let res
let next
let updateProduct = {name:"phone", description:"this is a phone"}

beforeEach(()=>{
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = jest.fn();
});

describe("Product Controller Create", () => {
    beforeEach(()=>{
        req.body = newProduct
    });

    it("should have a createProduct function", ()=>{
        expect(typeof productController.createProduct).toBe("function");
    });
    
    it("should call ProductModel.create", async()=>{
        await productController.createProduct(req, res, next);
        expect(productModel.create).toHaveBeenCalledWith(newProduct);
    });
    
    it("should return 201 response code", async()=>{
        await productController.createProduct(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should return json body in response", async()=>{
        productModel.create.mockReturnValue(newProduct);
        await productController.createProduct(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newProduct);
    });

    it("should handle Error", async()=>{
        const ErrorMessage = {message: "description property missing"};
        const rejectedPromise = Promise.reject(ErrorMessage);

        productModel.create.mockReturnValue(rejectedPromise);
        await productController.createProduct(req, res, next);
        expect(next).toHaveBeenCalledWith(ErrorMessage);
    });
});

describe("Product Controller Get", () => {
    it("should have a get products function", ()=>{
        expect(typeof productController.getProducts).toBe("function")
    });

    it("should call ProductMdoel.findAll({})", async() => {
        await productController.getProducts(req, res, next);
        expect(productModel.findAll).toHaveBeenCalledWith({});
    })

    it("should return 200 response", async() => {
        await productController.getProducts(req,res,next);
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled).toBeTruthy();
    });

    it("should return json body in response", async()=>{
        productModel.findAll.mockReturnValue(allProducts);
        await productController.getProducts(req,res,next);
        expect(res._getJSONData()).toStrictEqual(allProducts);
    });

    it("should handle errors", async()=>{
        const ErrorMessage = {message: "Error finding product data"};
        const rejectedPromise = Promise.reject(ErrorMessage);

        productModel.findAll.mockReturnValue(rejectedPromise);
        await productController.getProducts(req, res, next);
        expect(next).toHaveBeenCalledWith(ErrorMessage)
    });
});

describe("Product Controller GetById", ()=>{
    it("should have a getProductById", () => {
        expect(typeof productController.getProductById).toBe("function");
    })

    it("should call productModel.findById", async() => {
        req.params.productId = 1;
        await productController.getProductById(req, res, next);
        expect(productModel.findById).toHaveBeenCalledWith(1)
    })

    it("should return json body and response code 200", async()=>{
        productModel.findById.mockReturnValue(newProduct);
        await productController.getProductById(req, res, next);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(newProduct);
        expect(res._isEndCalled()).toBeTruthy();

    })

    it("should return 404 when item doesn't exist", async()=>{
        productModel.findById.mockReturnValue(null);
        await productController.getProductById(req,res,next);
        expect(res.statusCode).toBe(404);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should handle errors", async()=>{
        const ErrorMessage = {message: "Error finding product data"};
        const rejectedPromise = Promise.reject(ErrorMessage);

        productModel.findById.mockReturnValue(rejectedPromise);
        await productController.getProductById(req, res, next);
        expect(next).toHaveBeenCalledWith(ErrorMessage);
    });
});

describe("Product Controller Update", ()=>{
    it("should have an updateProduct", () => {
        expect(typeof productController.updateProduct).toBe("function");
    })

    it("should call productModel.findByIdAndUpdate", async() => {
        req.params.productId = 1;
        req.body = {name:"phone", description:"this is a phone"},

        await productController.updateProduct(req, res, next);
        expect(productModel.findByIdAndUpdate).toHaveBeenCalledWith(
            1,
            {name:"phone", description:"this is a phone"},
            {new:true}
        );
    })

    it("should return json body and response code 200", async()=>{
        req.params.productId=1;
        req.body=updateProduct;
        
        productModel.findByIdAndUpdate.mockReturnValue(updateProduct);
        await productController.updateProduct(req, res, next);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(updateProduct);
        expect(res._isEndCalled()).toBeTruthy();
    })

    it("should return 404 when item doesn't exist", async()=>{
        productModel.findByIdAndUpdate.mockReturnValue(null);
        await productController.updateProduct(req,res,next);
        expect(res.statusCode).toBe(404);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should handle errors", async()=>{
        const ErrorMessage = {message: "Error updating product data"};
        const rejectedPromise = Promise.reject(ErrorMessage);

        productModel.findByIdAndUpdate.mockReturnValue(rejectedPromise);
        await productController.updateProduct(req, res, next);
        expect(next).toHaveBeenCalledWith(ErrorMessage);
    })
});

describe("Product Controller Delete", ()=>{
    it("should have a deleteProdudct", ()=>{
        expect(typeof productController.deleteProduct).toBe("function")
    })
    
    it("should call productModel.findByIdAndDelete", async() => {
        req.params.productId = 1;

        await productController.deleteProduct(req, res, next);
        expect(productModel.findByIdAndDelete).toHaveBeenCalledWith(1);
    })

    it("should return response code 200", async()=>{
        req.params.productId=1;
        let deletedProduct = {
            name: "deleted",
            description: "deleted"
        }
        
        productModel.findByIdAndDelete.mockReturnValue(deletedProduct);
        await productController.deleteProduct(req, res, next);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual(deletedProduct);
        expect(res._isEndCalled()).toBeTruthy();
    })

    it("should return 404 when item doesn't exist", async()=>{
        productModel.findByIdAndDelete.mockReturnValue(null);
        await productController.deleteProduct(req,res,next);
        expect(res.statusCode).toBe(404);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should handle errors", async()=>{
        const ErrorMessage = {message: "Error updating product data"};
        const rejectedPromise = Promise.reject(ErrorMessage);

        productModel.findByIdAndDelete.mockReturnValue(rejectedPromise);
        await productController.deleteProduct(req, res, next);
        expect(next).toHaveBeenCalledWith(ErrorMessage);
    })
})