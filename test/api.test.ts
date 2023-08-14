//Require the dev-dependencies
import chai from "chai";
import axios from "axios";
import express from "express";
import { detail } from "../src/detail";

//Our parent block
describe("api", async () => {
  const headers = {
    "x-pandaclick-agent": "2",
    "x-panda-source": "PandaClick",
    "x-language": "en",
    "x-session-id": "a2e98f11-faa8-4864-b439-063bcfad4e4a",
    "user-agent": "okhttp/5.0.0-alpha.6",
  };

  describe("/GET DETAIL", async () => {
    it("it should GET one product", async () => {
      const res = await axios.get(
        `https://api.panda-click.com/v3/products/16397`,
        {
          headers,
        }
      );

      chai.expect(res.status).equal(200);
      chai.expect(res.data.data.product).to.exist;
      chai.expect(res.data.data.product).to.be.an("object");
    });
  });

  describe("/GET CATEGORY", async () => {
    it("it should GET one category", async () => {
      const res = await axios.get(
        `https://api.panda-click.com/v3/products?category_id=362&sort=relevance&page=1`,
        {
          headers,
        }
      );

      chai.expect(res.status).equal(200);
      chai.expect(res.data.data.products).to.exist;
      chai.expect(res.data.data.products).to.be.an("array");
    });
  });

  describe("/GET CATEGORIES", async () => {
    it("it should GET all categories", async () => {
      const res = await axios.get(`https://api.panda-click.com/v3/categories`, {
        headers,
      });

      chai.expect(res.status).equal(200);
      chai.expect(res.data.data.categories).to.exist;
      chai.expect(res.data.data.categories).to.be.an("array");
    });
  });

  describe("/GET SEARCH", async () => {
    it("it should GET search terms", async () => {
      const res = await axios.get(
        `https://api.panda-click.com/v3/products?search_key=bread&sort=relevance&page=1`,
        {
          headers,
        }
      );

      chai.expect(res.status).equal(200);
      chai.expect(res.data.data.products).to.exist;
      chai.expect(res.data.data.products).to.be.an("array");
    });
  });
});
