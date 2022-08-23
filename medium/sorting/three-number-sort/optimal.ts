/**
 *
 * Complexity analyses
 * O(n) time | O(1) space
 */

export function threeNumberSort(array: number[], order: number[]) {
  let [firstIdx, iterIdx, thirdIdx] = [0, 0, array.length - 1];

  while (iterIdx <= thirdIdx) {
    const curVal = array[iterIdx];

    if (curVal === order[0]) {
      swap(array, firstIdx, iterIdx);
      firstIdx++;
      iterIdx++;
    } else if (curVal === order[1]) {
      iterIdx++;
    } else {
      swap(array, iterIdx, thirdIdx);
      thirdIdx--;
    }
  }

  return array;
}

function swap(array: number[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}
