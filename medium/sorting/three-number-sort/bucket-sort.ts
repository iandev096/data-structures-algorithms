/**
 *
 * Complexity analyses
 * O(n) time | O(1) space
 */

export function threeNumberSort(array: number[], order: number[]) {
  const buckets = new Map();

  for (const num of order) {
    buckets.set(num, 0);
  }

  for (const num of array) {
    buckets.set(num, buckets.get(num) + 1);
  }

  let i = 0;
  for (const [key, value] of buckets.entries()) {
    let j = 0;
    while (j < value) {
      array[i] = key;
      j++;
      i++;
    }
  }

  return array;
}
