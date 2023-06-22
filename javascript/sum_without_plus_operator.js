function getSum(a, b) {
    while (b !== 0) {
      const carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  }
  
  // Example usage
  const a = 1;
  const b = 2;
  const sum = getSum(a, b);
  console.log(sum);
  // Output: 3
  