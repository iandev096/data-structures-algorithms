/**
 * This is a relatively fast sorting algorithm. It requires that a pivot value be chosen from the list to be
 * sorted. And then we iterate over the array, keeping all values lesser than the pivot value before the pivot value,
 * and keeping the numbers greater than the pivot value after it. At the end of this set of iterations, the pivot
 * value will be in its final sorted position. Repeat this process for every item in the left and the right subarrays.
 * The array will be sorted afterwards.
 *
 * Note that the pivot value can be any random item from the list. But for our implementation, the pivot value
 * will always be the first item in the list.
 *
 * Complexity analyses
 * Best case: O(nlog(n)) time | O(log(n)) space (When a pivot divides the entire list in half)
 * Average case: O(nlog(n)) time | O(log(n)) space
 * Worst case: O(n^2) time | O(log(n)) space
 */

export function quickSort(array: number[]) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array: number[], startIdx: number, endIdx: number) {
  if (startIdx >= endIdx) {
    return;
  }

  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(array, leftIdx, rightIdx);
    }
    if (array[leftIdx] <= array[pivotIdx]) {
      leftIdx++;
    }
    if (array[rightIdx] >= array[pivotIdx]) {
      rightIdx--;
    }
  }

  swap(array, pivotIdx, rightIdx);

  const leftSubArrayLength = rightIdx - 1 - startIdx;
  const rightSubArrayLength = endIdx - (rightIdx + 1);
  const leftSubArrayIsSmaller = leftSubArrayLength < rightSubArrayLength;

  if (leftSubArrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(array: number[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}
