/**
 * The approach used here is quite complex and challenging to understand. I recommend that one should first start with the not-in-place approach before this one.
 * The approach here is similar to the not-in-place approach, however this approach requires that only one extra array must be created.
 * Consequently, this has a better space complexity than the other solution.
 * The idea (which still remains same) is to first recursively divide the array into two approximately equal parts;
 * until we get to the point where we dealing with an array(s) with only one item.
 * It is easy to compare and sort arrays with with only one item into a new array.
 * So the recursive divisions creates the situation where the array is divided into separate pairs of twos.
 * Each of these pairs is then merged and by the time we get to the unwinding of the first recursive call, we have
 * a sorted array.
 * How are we able to do this without creating new arrays? We use the concept of pointers or in this case, the indexes of the array.
 *
 * Complexity analyses
 * Best case: O(nlog(n)) time | O(nlog(n) space
 * Average case: O(nlog(n)) time | O(nlog(n) space
 * Worst case: O(nlog(n)) time | O(nlog(n) space
 */

export function mergeSort(array: number[]) {
  if (array.length <= 1) {
    return array;
  }

  const auxiliaryArray = [...array];

  const [startIdx, endIdx] = [0, array.length - 1];
  mergeSortHelper(array, auxiliaryArray, startIdx, endIdx);
  return array;
}

function mergeSortHelper(
  mainArr: number[],
  auxiliaryArr: number[],
  startIdx: number,
  endIdx: number
) {
  if (startIdx === endIdx) {
    return;
  }

  const middleIdx = Math.floor((startIdx + endIdx) / 2);

  mergeSortHelper(auxiliaryArr, mainArr, startIdx, middleIdx);
  mergeSortHelper(auxiliaryArr, mainArr, middleIdx + 1, endIdx);
  doMerge(mainArr, auxiliaryArr, startIdx, middleIdx, endIdx);
}

function doMerge(
  mainArr: number[],
  auxiliaryArr: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number
) {
  let [cur, left, right] = [startIdx, startIdx, middleIdx + 1];

  while (left <= middleIdx && right <= endIdx) {
    if (auxiliaryArr[left] <= auxiliaryArr[right]) {
      mainArr[cur] = auxiliaryArr[left];
      left++;
    } else {
      mainArr[cur] = auxiliaryArr[right];
      right++;
    }
    cur++;
  }

  while (left <= middleIdx) {
    mainArr[cur] = auxiliaryArr[left];
    left++;
    cur++;
  }

  while (right <= endIdx) {
    mainArr[cur] = auxiliaryArr[right];
    right++;
    cur++;
  }
}
