function sum(a, b, c) {
  console.log(arguments);
  const result = a + b + c;
  return result;
}

const total = sum(10, 20, 30);
console.log(sum.length);

let students1 = {
  name: "Mafi",
  partner: "Murgi",
};

let students2 = {
  name: "Raj",
  partner: "Anika",
};

function makeMovie(couple1, couple2) {
  couple1.name = "Ananta";
  couple2.partner = "heheheh";
}
console.log(students1);
console.log(students2);
makeMovie(students1, students2);

console.log(students1);
console.log(students2);
