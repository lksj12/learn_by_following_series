const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const port = 3000;
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    }),
);

// use middleware to serve static images
app.use("/images", express.static(path.join(__dirname, "images")));

// read data from file
const travelDataRaw = fs.readFileSync(path.join(__dirname, "travel.json"), "utf-8");
const travelData = JSON.parse(travelDataRaw);

app.get("/products", (req, res) => {
    res.json(travelData.countries);
});

app.get("/options", (req, res) => {
    res.json(travelData.options);
});

let orderHistory = [];

app.post("/order", (req, res) => {
    const total = req.body?.totals?.total;

    if (!Number.isFinite(total)) {
        return res.status(400).json({ message: "A valid order total is required." });
    }

    const orderNumber = Math.floor(Math.random() * 1000000);
    const order = { price: total, orderNumber };
    orderHistory.push(order);
    res.status(201).json(orderHistory);
});

if (require.main === module) {
    app.listen(port, () => console.log(`listening on port ${port}`));
}

module.exports = app;
