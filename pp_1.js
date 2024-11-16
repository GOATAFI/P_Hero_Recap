const func = (arr) => {
  let arr2 = [];
  //   console.log(arr);
  for (const name of arr) {
    // console.log(name);
    if (name.length % 2 === 0) {
      console.log(name);
      arr2.push(name);
    }
  }
  return arr2;
};

console.log(func(["nahida", "mafi", "mjj", "uh"]));
