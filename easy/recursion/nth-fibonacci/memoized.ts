interface Cache {
  [key: number]: number;
}

export function getNthFib(n: number, cache: Cache = { 1: 0, 2: 1 }) {
  if (n in cache) {
    return cache[n];
  }

  cache[n] = getNthFib(n - 1, cache) + getNthFib(n - 2, cache);

  return cache[n];
}
