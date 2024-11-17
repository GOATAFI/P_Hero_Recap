const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.

const selected = numbers.filter((num) => num > 4);
console.log(selected);

const even = numbers.filter((even) => even % 2 === 0);
console.log(even);

const names = ["Nahid", "Parvez", "Mafi", "Hol", "Holu"];
const evenName = names.filter((name) => name.length % 2 === 0);
console.log(evenName);
