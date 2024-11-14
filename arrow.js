const add = (a, b) => a + b;
const multiply = (a, b, c) => a * b * c;
const divide = (a, b) => a / b;

const sum = add(4, 5);
console.log(sum);

const guunfol = multiply(1, 2, 3);
console.log(guunfol);

const vagfol = divide(10, 2);
console.log(vagfol);

const getAge = (person) => person.age;
const student = { name: "Mafi", age: 24 };
const age = getAge(student);
console.log(age);

const getThird = (numArr) => numArr[2];
const third = getThird([10, 32, 34, 35, 45, 46]);
console.log(third);

const jogakhicuri = (x, y, z) => {
  const sum = x + y + z;
  const multiply = x * y * z;
  const result = sum + multiply;
  return result;
};

console.log(jogakhicuri(2, 3, 4));
