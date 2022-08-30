/**
 * Radix sort
 *
 * Traditional sorting algorithms usually have a best case performance of O(nlog(n)) time complexity. Radix sort
 * works differently and may even be a better alternative if certain factors are in place. Radix sort relies on
 * counting sort. Counting sort requires that we know the max value of items in the list and the min value. The lower
 * the difference between this max value and this min value, the better the counting sort algorithm would perform and
 * consequently the better radix sort would perform. There are other factors to consider as well.
 *
 * With radix sort, we consider the individual digits of the numbers a list contains and then we sort the list by these
 * digits considering one digit position at a time. So we first consider the ones, and then tens, and then hundreds and so on.
 * We use counting sort to carry out this digit positional sort. So we will use counting sort multiple times based on the maximum
 * number of digits we have among the list of numbers.
 *
 * O(d * (n + b)) time | O(n + b) space - where n is the length of the input array,
 * d is the max number of digits, and b is the base of the numbering system used.
 */

const BASE = 10;

const getDigitPositionalValue = (digitPlace: number, base = BASE) =>
  base ** digitPlace;
// 1 => 1 - ones; 2 => 10 - tens; 3 => 100 - hundreds, ...

const getDigit = (num: number, digitPlace: number, base = BASE) => {
  const positionalValue = getDigitPositionalValue(digitPlace, base);
  return Math.floor(num / positionalValue) % base;
};

function countingSort(array: number[], digitPlace: number) {
  const sortedArray = new Array(array.length).fill(0);
  const countArray = new Array(BASE).fill(0);

  const positionalValue = getDigitPositionalValue(digitPlace);

  for (const num of array) {
    const countIdx = getDigit(num, digitPlace);
    countArray[countIdx]++;
  }

  for (let i = 1; i < BASE; i++) {
    countArray[i] += countArray[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const countIdx = getDigit(array[i], digitPlace);
    countArray[countIdx]--;
    const sortedIdx = countArray[countIdx];
    sortedArray[sortedIdx] = array[i];
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = sortedArray[i];
  }
}

export function radixSort(array: number[]) {
  if (array.length === 0) {
    return array;
  }

  const maxNumber = Math.max(...array);

  let digitPlace = 0;

  while (Math.floor(maxNumber / getDigitPositionalValue(digitPlace)) > 0) {
    countingSort(array, digitPlace);
    digitPlace++;
  }

  return array;
}
