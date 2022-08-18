function largestPermutation(list, swaps) {
  const dict = list.reduce((acc, cur, idx) => {
    acc[cur] = idx;

    return acc;
  }, {});

  const sorted = [...list].sort((a, b) => a - b);

  console.log(dict);
  console.log(sorted);

  for (let i = 0; swaps > 0 && i < list.length; i++) {
    const largest = sorted.pop();
    const cur = list[i];

    if (cur === largest) {
      continue;
    } else {
      const largestElemIdx = dict[largest];
      [list[i], list[largestElemIdx]] =  [list[largestElemIdx], list[i]];
      [dict[cur], dict[largest]] = [dict[largest], dict[cur]];
      swaps--;
    }
  }

  console.log(list);

  return list;
}

largestPermutation([3, 2, 6, 4, 1, 5], 3);
