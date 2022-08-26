/**
 * The base case correctly assumes that if we have an array with length of 1, there is no need to sort it anymore. If the length is 0, the same also applies
 * The pivot can be any number at all but it makes sense to use the last element because popping of the last element from an array is a constant time operation.
 * left represents the list (subarray) of numbers less than or equal to any given pivot.
 * right represents the list (subarray) of numbers greater than any given pivot.
 *
 * Complexity analyses
 * Best case: O(nlog(n)) time | O(log(n)) space (When a pivot divides the entire list in half)
 * Average case: O(nlog(n)) time | O(log(n)) space
 * Worst case: O(n^2) time | O(n) space
 */

export function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const left: number[] = [];
  const right: number[] = [];
  const pivot = array.pop() as number;

  for (const num of array) {
    if (num > pivot) {
      right.push(num);
    } else {
      left.push(num);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
