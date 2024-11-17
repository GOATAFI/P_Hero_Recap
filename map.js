const numbers = [1, 2, 3, 4];
function doubleit(num) {
  return num * 2;
}

//maps loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const result = numbers.map(doubleit);
// console.log(result);

const double2 = (n) => n * 2;

const output = numbers.map(double2);
console.log(output);

const output2 = numbers.map((n) => n * 2);
console.log(output2);

const numbers3 = [10, 20, 30];
const doubled = numbers3.map((number) => number * 2);
console.log(doubled);

const sqr = numbers3.map((number) => number * number);
console.log(sqr);

const friends = ["Nahid", "Parvez", "Mafi"];

const lengths = friends.map((friend) => friend.length);
console.log(lengths);
