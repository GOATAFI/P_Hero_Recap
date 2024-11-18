const x = [];
if (x) {
  console.log(`value of x is truthy`);
} else {
  console.log(`value of x is falsy`);
}

/**
 * Truthy:
 * 1.true
 * 2.any number (+ve or -ve except 0)
 * 3.string (except empty string "")
 * 4.empty object {} is truthy
 * 5.empty array [] is truthy
 *
 * Falsy:
 * 1.false
 * 2.0
 * 3.empty string
 * 4.undefined
 * 5.null
 */
