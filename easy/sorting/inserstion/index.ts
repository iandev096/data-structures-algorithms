/**
 * With insertion sort, the list to be sorted is divided into two main sections:
 * - tentatively sorted
 * - unsorted
 * And then for every item in the list, we process and find out where to place it in the tentatively
 * sorted section and we do so, until the whole list is sorted.
 *
 * Complexity analyses
 * Best case: O(n) time | O(1) space
 * Average case: O(n^2) time | O(1) space
 * Worst case: O(n^2) time | O(1) space
 */

export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    let [curIdx, prevIdx]: [number, number] = [i, i - 1];

    while (curIdx > 0 && array[curIdx] < array[prevIdx]) {
      swap(array, curIdx, prevIdx);
      curIdx--;
      prevIdx--;
    }
  }

  return array;
}

function swap(array: number[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}
