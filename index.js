function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function factorialList(n) {
  let result = 1;
  const list = [result];

  for (let i = 2; i <= n; i++) {
    result *= i;

    list.push(result);
  }

  return list;
}

module.exports = { factorial, factorialList };
