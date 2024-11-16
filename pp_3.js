const mergeFunc = (arr1, arr2) => {
  console.log(arr1, arr2);
  const arr3 = [...arr1, ...arr2];
  console.log(arr3);
  return Math.max(...arr3);
};

const n = mergeFunc([1, 2, 3], [4, 5, 6]);
console.log(n);
