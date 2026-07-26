const request = require("supertest");
const app = require("../../app")
const newProduct = require("../data/new_product.json")
let firstProduct;
it("POST /api/products", async()=>{
    const response = await request(app)
        .post("/api/products")
        .send(newProduct);

    expect(response.statusCode).toBe(201)
    expect(response.body.name).toBe(newProduct.name)
    expect(response.body.description).toBe(newProduct.description)
    expect(response.body.price).toBe(newProduct.price)
})

it("should return 500 on POST /api/products", async() => {
    const response = await request(app)
        .post("/api/products")
        .send({name: "phone"});
    
    expect(response.statusCode).toBe(500);
    // console.log(response.body)
    expect(response.body).toStrictEqual({message: "NOT NULL constraint failed: product.description"})
})

it("GET /api/products", async()=>{
    const response = await request(app).get("/api/products");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0].name).toBeDefined();
    expect(response.body[0].description).toBeDefined();
    firstProduct = response.body[0];
})

it("GET /api/products/:productId", async()=>{
    const response = await request(app).get(`/api/products/${firstProduct.id}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBeDefined();
    expect(response.body.description).toBeDefined();
})

it("GET id doesn't exist /api/products/:productId", async()=>{
    const response = await request(app).get(`/api/products/${-1}`);
    expect(response.statusCode).toBe(404);
    // expect(response.body.name).not.toBeDefined();
    // expect(response.body.description).not.toBeDefined();
})

it("PUT /api/products", async() => {
    const response = await request(app)
                                .put(`/api/products/${firstProduct.id}`)
                                .send({name: "phone", description:"this is a phone"})
    
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("phone");
    expect(response.body.description).toBe("this is a phone");
})

it("PUT id doesn't exist /api/products/:productId", async()=>{
    const response = await request(app).get(`/api/products/${-1}`);
    expect(response.statusCode).toBe(404);
    // expect(response.body.name).not.toBeDefined();
    // expect(response.body.description).not.toBeDefined();
})

it("DELETE /api/products", async() => {
    const response = await request(app)
                                .delete(`/api/products/${firstProduct.id}`)
                                .send()
    
    expect(response.statusCode).toBe(200);
})

it("DELETE id doesn't exist /api/products/:productId", async()=>{
    const response = await request(app).delete(`/api/products/${-1}`);
    expect(response.statusCode).toBe(404);
    // expect(response.body.name).not.toBeDefined();
    // expect(response.body.description).not.toBeDefined();
})