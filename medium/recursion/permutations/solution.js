function getPermutations(array) {
  const permutations = [];
  permutationHelper(array, [], permutations);
  return permutations;
}

function permutationHelper(array, permutation, permutations) {
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

getPermutations([1, 2, 3, 4]);
