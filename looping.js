//for of loop amra array ar string er vitor chalayte parbo , kintu object er upor chalayte parbona
//object er jonno for in use korbo

const numbers = [1, 2, 3, 4, 5, 6];
for (const num of numbers) {
  console.log(num);
}

const name = "Nahid Parvez Mafi";
for (const string of name) {
  console.log(string);
}

const obj = {
  name: "Mafi",
  age: 24,
  phone: "012345",
};

for (const keys in obj) {
  //   console.log(obj[keys]);
  const values = obj[keys];
  console.log(keys);
  console.log(values);
}
