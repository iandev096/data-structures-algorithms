/**
 *
 * Complexity analyses
 * O(n) time | O(1) space
 */
export function threeNumberSort(array: number[], order: number[]) {
  let first = 0;
  let last = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === order[0]) {
      swap(array, i, first);
      first++;
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === order[2]) {
      swap(array, i, last);
      last--;
    }
  }

  return array;
}

function swap(array: number[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}
