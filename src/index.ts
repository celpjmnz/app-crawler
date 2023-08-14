import express from "express";
import { detail } from "./detail";
import { category, categories } from "./category";
import { search } from "./search";

const port = 3000;
const app = express();

app.get("/detail/:id", async (req, res) => {
  res.send(await detail(req.params.id));
});

app.get("/category/:id", async (req, res) => {
  res.send(await category(req.params.id));
});

app.get("/search/:term", async (req, res) => {
  res.send(await search(req.params.term));
});

app.get("/categories", async (req, res) => {
  res.send(await categories());
});

app.listen(port, () => {
  console.log(`Crawler listening on port ${port}`);
});
