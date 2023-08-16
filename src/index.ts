require("dotenv").config();
import express from "express";
import * as mongoose from "mongoose";
import { detail } from "./detail";
import { category, categories } from "./category";
import { search } from "./search";
import { MongoClient } from "mongodb";

const connString = process.env.MONGO_URL!;

mongoose.connect(connString);
const client = new MongoClient(connString);

const port = 3000;
const app = express();

app.get("/detail/:id", async (req, res) => {
  const data = await detail(req.params.id);
  const conn = await client.connect();
  const db = conn.db("products");

  let collection = db.collection("prodDetails", conn);
  await collection.insertOne(data);
  res.send(data).status(204);
});

app.get("/category/:id", async (req, res) => {
  const data = await category(req.params.id);
  const conn = await client.connect();
  const db = conn.db("products");

  let collection = db.collection("prodCategory", conn);
  await collection.insertMany(data.products);
  res.send(data).status(204);
});

app.get("/search/:term", async (req, res) => {
  const data = await search(req.params.term);
  const conn = await client.connect();
  const db = conn.db("products");

  let collection = db.collection("prodSearch", conn);
  await collection.insertMany(data.products);
  res.send(data).status(204);
});

app.get("/categories", async (req, res) => {
  res.send(await categories());
});

app.listen(port, () => {
  console.log(`Crawler listening on port ${port}`);
});

module.exports = app;
