import { getSearchProducts } from "./api";
import { Product, FinalProduct } from "./interfaces";

export const search = async (term: string) => {
  const res = await getSearchProducts(term);

  if (res.status !== 200) throw new Error("Unable to fetch");

  const data: Product[] = res.data.data.products;

  let products: FinalProduct[] = [];

  data.map((p) => {
    const varieties =
      p.varieties.length > 1
        ? p.varieties.find((i) => i.id.toString() === p.id)
        : p.varieties[0];

    const nQ = varieties ? `${varieties.size} ${varieties.unit}` : undefined;
    const product: FinalProduct = {
      id: p.id,
      name: p.name,
      brand: p.brand.name,
      category: p.category.name,
      description: varieties ? varieties?.description : p.name,
      price: varieties ? varieties?.price : "1",
      netQuantity: nQ,
      available: varieties
        ? varieties?.availability > 0
          ? "yes"
          : "no"
        : "no",
    };
    products.push(product);
  });

  return {
    total_number_products: products.length,
    products: products,
  };
};
