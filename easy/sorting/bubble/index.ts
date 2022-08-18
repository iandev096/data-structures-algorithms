export function bubbleSort(array: number[]) {
  let isSorted = false;

  let counter = 0;
  while (!isSorted) {
    isSorted = true;

    for (let i = 1; i < array.length - counter; i++) {
      if (array[i] < array[i - 1]) {
        swap(array, i, i - 1);
        isSorted = false;
      }
    }

    counter++;
  }

  return array;
}

function swap(array: number[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}

/**
 * Bubble sort algorithm sorts a list by repeatedly swapping adjacent elements
 * that are in the wrong order until the whole list is in order.
 *
 * Complexity analyses
 * Best case: O(n) time | O(1) space
 * Average case: O(n^2) time | O(1) space
 * Worst case: O(n^2) time | O(1) space
 */
