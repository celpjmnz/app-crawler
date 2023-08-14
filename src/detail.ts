import { getDetailProducts } from "./api";
import { Product, FinalProduct } from "./interfaces";

export const detail = async (id: string) => {
  const res = await getDetailProducts(id);

  if (res.status !== 200) throw new Error("Product has not been found");

  const data: Product = res.data.data.product;

  const varieties = data.varieties.find((i) => i.id === Number(id));
  console.log(id);

  const nQ = varieties ? `${varieties.size} ${varieties.unit}` : undefined;
  const product: FinalProduct = {
    id: data.id,
    name: data.name,
    brand: data.brand.name,
    category: data.category.name,
    description: varieties!.description,
    price: varieties!.price,
    netQuantity: nQ,
    available: varieties!.availability > 0 ? "yes" : "no",
  };
  return product;
};
