import express from "express";
import mongoose from "mongoose";

import Contact from "./contacts.js";

const app = express();
const PORT = 3000;

// middleware to parse json
app.use(express.json());

// db connection string
const connectionString =
  "mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<YOUR_CLUSTER_INFO>.mongodb.net/?retryWrites=true&w=majority";

// connect to mongodb
mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"));

// test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// create a contact route
app.post("/v1/contact", async (req, res) => {
  try {
    const test = new Contact(req.body);
    await test.save();
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// get a contact from db
app.get("/v1/contact", async (req, res) => {
  try {
    const result = await Contact.find({});
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`App started listening on port: ${PORT}`);
});
