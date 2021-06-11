//-- objects, mutability, and immutability --//

const SourceDataClear = {
  title: "Clear",
  type: "Shampoo",
  price: 36000,
  img: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/8/4ff04ad5-b060-49ca-959e-117ce5d10d27.jpg.webp",
};

//--- mutable ---//
// const clearProduct = SourceDataClear

//--- immutable ---//
// const clearProduct = Object.assign({}, SourceDataClear); // cara 1 - immutable
const clearProduct = { ...SourceDataClear }; // cara 2 - immutable

//--- coba ganti value untuk check mutability/immutability ---//
// clearProduct.type = "Mie";
// console.log("SourceDataClear", SourceDataClear);

export const allProducts = [
  {
    title: "Indomie Goreng",
    type: "Mie",
    price: 4000,
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-4570456/indomie_bandung---indomie-mie-goreng-special--85-g-_full01.jpg",
  },
  {
    title: "Pantene",
    type: "Shampoo",
    price: 20000,
    img: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/11/25/e62b80ce-743c-4ca4-8966-7190fdaeed6f.png.webp",
  },
  {
    title: "Bango",
    type: "Kecap",
    price: 10000,
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-4003950/bango_bango_kecap_manis_botol_135ml_full02.jpg",
  },
  {
    title: "Rejoice",
    type: "Shampoo",
    price: 22000,
    img: "https://media.dinomarket.com/docs/imgTD/2019-07/SampoAntiKusut340ml__150719200719_ll.jpg.jpg",
  },
  {
    title: "Mie Sedap",
    type: "Mie",
    price: 3500,
    img: "http://toko-indonesia.org/uploads/img/product/mie-sedap-soto-1105.jpg",
  },
  {
    title: "Gekikara Ramen",
    type: "Mie",
    price: 5400,
    img: "https://cf.shopee.co.id/file/8b68f8f0bfbc584ce67c44a4524abdd8",
  },
  {
    title: "iPhone 11",
    type: "Smartphone",
    price: 1200000,
    img: "https://media.dinomarket.com/docs/imgTD/2019-12/pic_iphone11promax_Grey5_051219231203_ll.jpg.jpg",
  },
  {
    title: "Kecap ABC",
    type: "Kecap",
    price: 9000,
    img: "https://cf.shopee.co.id/file/acc35b529cadc0c7f5d07f0f9192ea8d",
  },
  {
    title: "Galaxy Note20",
    type: "Smartphone",
    price: 20000000,
    img: "https://mobilenmore.com/wp-content/uploads/2020/08/Samsung-Galaxy-Note20-Ultra.png",
  },
  {
    title: "Popmie",
    type: "Mie",
    price: 5000,
    img: "https://cf.shopee.co.id/file/48e0aa0d5e2996de38d4c4f0fdd33a28",
  },
  {
    title: "Sarimie Isi 2",
    type: "Mie",
    price: 3800,
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//91/MTA-3452716/sarimi_mie-instant-sarimi-isi-2-126gr-ayam-kecap-1-pcs_full03.jpg",
  },
  clearProduct,
];
