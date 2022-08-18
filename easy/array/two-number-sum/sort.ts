// sorted array solution
// O(nlog(n)) | O(1)
export function twoNumberSum(array: number[], targetSum: number) {
  const resultArr: number[] = [];
	
  array = array.sort((a,b) => a - b);
  for (let c = 0, lp = 0, rp = array.length - 1; c < array.length; c++) {
		if (lp >= rp) {
			break;
		}
		
		const result = array[lp] + array[rp];
		
		if (result < targetSum) {
			lp++;
		} else if (result > targetSum) {
			rp--;
		} else {
			resultArr.push(array[lp], array[rp]);
			break;
		}
	}
	
  return resultArr;
}
