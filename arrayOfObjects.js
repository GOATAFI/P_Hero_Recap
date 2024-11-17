const products = [
  {
    name: "Lenovo",
    price: 45000,
  },
  {
    name: "Mac",
    price: 150000,
  },
  {
    name: "MacBook",
    price: 90000,
  },
  {
    name: "Asus",
    price: 190000,
  },
  {
    name: "Asus",
    price: 40000,
  },
];

const names = products.map((product) => product.name);
console.log(names);
const prices = products.map((product) => product.price);
console.log(prices);

const filteredPrice = products.filter((p) => p.price > 90000);
console.log(filteredPrice);

const foundProduct = products.find((p) => p.price < 50000);
console.log(foundProduct);
