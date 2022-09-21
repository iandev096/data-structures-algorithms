type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, depth: number = 1) {
  let result = 0;

  for (const item of array) {
    if (typeof item === "number") {
      result += item;
    } else {
      result += productSum(item, depth + 1);
    }
  }

  return result * depth;
}
