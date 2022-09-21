export function findThreeLargestNumbers(array: number[]) {
  const exclude = {};
  let first = findMax(array, exclude);
  let second = findMax(array, exclude);
  let third = findMax(array, exclude);

  return [third, second, first];
}

function findMax(array: number[], exclude: Record<number, boolean>) {
  let max = -Infinity;
  let maxIdx = -1;

  for (let i = 0; i < array.length; i++) {
    if (exclude[i]) {
      continue;
    }
    if (array[i] >= max) {
      max = array[i];
      maxIdx = i;
    }
  }

  exclude[maxIdx] = true;

  return max;
}
