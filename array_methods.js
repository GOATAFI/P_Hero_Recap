const products = [
  { name: "Laptop", price: 34000, brand: "Lenovo", color: "Gold" },
  { name: "Phone", price: 15000, brand: "Samsung", color: "Blue" },
  { name: "Tablet", price: 20000, brand: "Apple", color: "Silver" },
  { name: "Smartwatch", price: 5000, brand: "Fitbit", color: "Black" },
  { name: "Headphones", price: 3000, brand: "Sony", color: "Red" },
  { name: "Camera", price: 45000, brand: "Canon", color: "White" },
  { name: "Printer", price: 12000, brand: "HP", color: "Grey" },
  { name: "Monitor", price: 25000, brand: "Dell", color: "Black" },
];

const brands = products.map((product) => product.brand);
console.log(brands);

const cheap = products.filter((product) => product.price <= 20000);
console.log(cheap);

const lenovo = products.find((product) => product.brand === "Lenovo");
console.log(lenovo);

const specificNames = products.filter((p) => p.name.includes("n"));
console.log(specificNames);

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "Windows",
  languages: ["JavaScript", "Python", "SQL"],
  specification: {
    height: 70,
    weight: 75,
    address: "Dhaka, Bangladesh",
    drink: "coffee",
    watch: {
      color: "silver",
      price: 1000,
      brand: "Casio",
    },
  },
};

const { ide } = employee;
const { languages } = employee;
const { drink } = employee.specification;
const { watch } = employee.specification;
const { brand } = employee.specification.watch;

console.log(languages);
console.log(drink);
console.log(watch);
console.log(brand);
