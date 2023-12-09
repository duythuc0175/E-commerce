import axios from "axios";


export async function productsData() {
  const products = await axios.get(
    "http://localhost:3500/product"
  );
  return products;
}
