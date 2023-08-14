import axios from "axios";

const headers = {
  "x-pandaclick-agent": "2",
  "x-panda-source": "PandaClick",
  "x-language": "en",
  "x-session-id": "a2e98f11-faa8-4864-b439-063bcfad4e4a",
  "user-agent": "okhttp/5.0.0-alpha.6",
};

const getDetailProducts = (pId: string) => {
  return axios.get(`https://api.panda-click.com/v3/products/${pId}`, {
    headers,
  });
};

const getSearchProducts = (searchTerm: string) => {
  return axios.get(
    `https://api.panda-click.com/v3/products?search_key=${searchTerm}&sort=relevance&page=1`,
    {
      headers,
    }
  );
};

const getCategoryProducts = (categoryId: string) => {
  return axios.get(
    `https://api.panda-click.com/v3/products?category_id=${categoryId}&sort=relevance&page=1`,
    {
      headers,
    }
  );
};

const getAllCategories = () => {
  return axios.get("https://api.panda-click.com/v3/categories", {
    headers,
  });
};

export {
  getDetailProducts,
  getSearchProducts,
  getCategoryProducts,
  getAllCategories,
};
