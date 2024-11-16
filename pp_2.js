const square = (arr) => {
  console.log(arr);
  let sum = 0;
  let avg = 0;
  const length = arr.length;
  //   console.log(length);
  for (const element of arr) {
    const sqr = element * element;
    console.log(sqr);
    sum += sqr;
    avg = sum / length;
  }
  console.log(sum);
  console.log(avg);
};

square([1, 2, 3]);
