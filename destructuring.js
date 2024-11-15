const actor = {
  name: "Mafi",
  age: 24,
  phone: "012345678",
};
const { phone, age: vutum } = actor;
console.log(phone);
console.log(vutum);
// console.log(age);
const numbers = [43, 56];
const [first, second] = numbers;
console.log(first);

const fun = (a, b) => {
  a = 10;
  b = 20;
  return [a, b];
};

const [x, y] = fun();
console.log(x);
