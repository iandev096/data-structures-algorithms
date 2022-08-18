/**
 * The selection sort algorithms requires the list to be sorted be divided into two sub-lists.
 * One sub-list represents unsorted items and the other represents sorted items.
 * We start the process by assuming all the items are unsorted and so they are all kept in the unsorted sub-list.
 * So we iterate through the unsorted list repeatedly, each time looking for the smallest item.
 * And we add that smallest item to the other sub-list. This is done until everything is sorted.
 *
 * Complexity analyses
 * Best case: O(n^2) time | O(1) space
 * Average case: O(n^2) time | O(1) space
 * Worst case: O(n^2) time | O(1) space
 */

export function selectionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let smallest: { value: number; index: number } = {
      value: array[i],
      index: i,
    };

    for (let j = i; j < array.length; j++) {
      if (smallest.value > array[j]) {
        smallest = { value: array[j], index: j };
      }
    }

    swap(array, i, smallest.index);
  }

  return array;
}

function swap(array: number[], a: number, b: number) {
  [array[a], array[b]] = [array[b], array[a]];
}
