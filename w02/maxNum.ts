function maxNum(arr: number[]): number {
  if (arr.length == 0) {
    return Number.NaN;
  }
  let result = Number.NEGATIVE_INFINITY;
  arr.forEach(v => result = (v > result) ? v : result);
  return result;
}

console.log(maxNum([]));
console.log(maxNum([1]));
console.log(maxNum([1, 2, 3]));
console.log(maxNum([-10, 10, 2]));
console.log(maxNum([3, 3, 2, 2, -1]));