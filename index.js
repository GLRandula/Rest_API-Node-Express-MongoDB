require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/productRoutes");

app.use(express.json());

const PORT = process.env.PORT;
const db = process.env.DBURL;

mongoose.connect(db).then(() => {
    console.log("Connected to the DB.");
    
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
})
.catch((err) => {
    console.log(err);
});

//define simple route
app.get("/", (req, res) => {
    res.send("Server is running..");
});

app.use("/api/product", router);

