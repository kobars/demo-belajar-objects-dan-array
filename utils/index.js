import { allProducts } from "./product";

// olah reduce di sini
export function getTotalBelanja(boughtProducts) {
  const totalPrice = boughtProducts.reduce(function (acc, current) {
    return acc + current.price;
  }, 0);
  return totalPrice;
}

function mapProduct(value) {
  return {
    title: value.title,
    price: value.price,
    img: value.img,
    type: value.type,
  };
}

// function filterProduct(value) {
//   return value.type === 'Mie'
// }

export const products = allProducts.map(mapProduct);
// export const products = allProducts.filter(filterProduct);
