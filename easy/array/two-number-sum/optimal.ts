// hashtable solution
// O(n) time | O(n) space

export function twoNumberSum(array: number[], targetSum: number) {
  const numDict: Record<number, boolean> = {};
	const pair: number[] = [];
	
	for (const num of array) {
		const counterpart = targetSum - num;
		if (numDict[counterpart]) {
			pair.push(counterpart,num);
			break;
		}
		numDict[num] = true;
	}
	
  return pair;
}
