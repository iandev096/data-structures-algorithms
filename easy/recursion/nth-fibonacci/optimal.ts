export function getNthFib(n: number) {
  let fibNArr = [0, 1];

  for (let counter = 3; counter <= n; counter++) {
    const nextFib = fibNArr[0] + fibNArr[1];
    fibNArr = [fibNArr[1], nextFib];
  }

  const fibN = n === 1 ? fibNArr[0] : fibNArr[1];

  return fibN;
}
