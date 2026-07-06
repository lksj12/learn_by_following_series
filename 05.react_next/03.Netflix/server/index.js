const express = require("express");
require("dotenv").config();
const movieRouter = require("./routes/movie")

const app = express();
const port = 3000;


app.use(express.json());
app.use("/api", movieRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});