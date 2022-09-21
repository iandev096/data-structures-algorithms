export function findThreeLargestNumbers(array: number[]) {
  let [min, mid, max] = [-Infinity, -Infinity, -Infinity];

  for (const num of array) {
    if (num > max) {
      min = mid;
      mid = max;
      max = num;
    } else if (num > mid) {
      min = mid;
      mid = num;
    } else if (num > min) {
      min = num;
    }
  }

  return [min, mid, max];
}
