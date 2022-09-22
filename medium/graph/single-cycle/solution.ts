export function hasSingleCycle(array: number[]) {
  let numElementsVisited = 0;
  let curIdx = 0;

  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && curIdx === 0) return false;
    numElementsVisited++;
    curIdx = getNextIdx(curIdx, array);
  }

  return curIdx === 0;
}

function getNextIdx(curIdx: number, array: number[]) {
  const jump = array[curIdx];
  const nextIdx = (curIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
