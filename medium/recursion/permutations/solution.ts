/* Complexity analyses
 * Average case: O(n*n!) time | O(n*n!) space
 * Worst case: O(n*n*n!) time | O(n*n*n!) space
 */

export function getPermutations(array: number[]) {
  const permutations: number[][] = [];
  permutationHelper(array, [], permutations);
  return permutations;
}

function permutationHelper(
  array: number[],
  permutation: number[],
  permutations: number[][]
) {
  if (array.length === 0 && permutation.length > 0) {
    permutations.push(permutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArr = [...array.slice(0, i), ...array.slice(i + 1)];
      const newPerm = [...permutation, array[i]];
      permutationHelper(newArr, newPerm, permutations);
    }
  }
}
