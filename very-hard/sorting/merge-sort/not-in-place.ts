/**
 * This is a fast sorting algorithm. The approach used here doesn't sort the elements of the array in place.
 * The idea is to first recursively divide the array into two approximately equal parts;
 * until we get to the point where we dealing with an array(s) with only one item.
 * It is easy to compare and sort arrays with with only one item into a new array.
 * So the recursive divisions creates the situation where the array is divided into separate pairs of twos.
 * Each of these pairs is then merged and by the time we get to the unwinding of the first recursive call, we have
 * a sorted array.
 *
 * Complexity analyses
 * Best case: O(nlog(n)) time | O(nlog(n) space
 * Average case: O(nlog(n)) time | O(nlog(n) space
 * Worst case: O(nlog(n)) time | O(nlog(n) space
 */

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const middleIdx = Math.floor(array.length / 2);

  const leftSubArr = array.slice(0, middleIdx);
  const rightSubArr = array.slice(middleIdx);

  return mergeSortedArrays(mergeSort(leftSubArr), mergeSort(rightSubArr));
}

function mergeSortedArrays(
  leftSubArr: number[],
  rightSubArr: number[]
): number[] {
  const sortedArr = [...new Array(leftSubArr.length + rightSubArr.length)];

  let [cur, left, right] = [0, 0, 0];

  while (left < leftSubArr.length && right < rightSubArr.length) {
    if (leftSubArr[left] <= rightSubArr[right]) {
      sortedArr[cur] = leftSubArr[left];
      left++;
    } else {
      sortedArr[cur] = rightSubArr[right];
      right++;
    }
    cur++;
  }

  while (left < leftSubArr.length) {
    sortedArr[cur] = leftSubArr[left];
    left++;
    cur++;
  }

  while (right < rightSubArr.length) {
    sortedArr[cur] = rightSubArr[right];
    right++;
    cur++;
  }

  return sortedArr;
}
