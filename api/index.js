const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors());

const CONNECTION_STRING = process.env.MONGO_URI; // Use the environment variable
const DATABASENAME = "fantomJournal";
let database;

const connectToDatabase = async () => {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING);
        database = client.db(DATABASENAME);
        console.log("MongoDB connection successful");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
};

// Start Express server and connect to MongoDB
app.listen(5038, async () => {
    await connectToDatabase();
    console.log("Server is running on port 5038");
});

// Example route
app.get("/", (req, res) => {
    res.send("API is working");
});
