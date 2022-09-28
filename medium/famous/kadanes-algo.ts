/**
 *
 * Complexity analyses
 * O(n) time | O(1) space
 */

export function kadanesAlgorithm(array: number[]) {
  let curMax = -Infinity;
  let accSum = 0;

  for (const num of array) {
    accSum = Math.max(accSum + num, num);
    curMax = Math.max(curMax, accSum);
  }

  return curMax;
}
