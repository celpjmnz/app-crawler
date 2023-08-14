export interface Product {
  id: string;
  name: string;
  brand: { name: string };
  category: { name: string };
  varieties: {
    id: number;
    price: string;
    size: string;
    unit: string;
    description: string;
    availability: number;
    imageUrl: string;
  }[];
}

export interface FinalProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: string;
  netQuantity?: string;
  available: "yes" | "no";
}

export interface Category {
  id: number;
  name: string;
}
