const arr = [{ a: 2 }, { a: 3 }, { a: 2 }, { a: 2 }, { a: 3 }];

const result = arr.reduce((acc, curr) => {
  if (curr.a === 2) {
    acc.push([curr]);
  } else if (acc.length) {
    acc[acc.length - 1].push(curr);
  }
  return acc;
}, []);

console.log(result);

