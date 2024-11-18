const user = {
  id: 1,
  name: "Mafi",
  job: "Student",
};
console.log(user);
// const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
  owner: "Alia",
  address: {
    street: "Kochukhet",
    city: "Dhaka",
    country: "Bd",
  },
  products: ["laptop", "mouse"],
  revenue: 40000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
