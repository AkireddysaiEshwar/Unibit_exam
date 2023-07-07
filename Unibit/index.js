function findCombinations(arr, target) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      const pairs = map.get(complement);
      pairs.forEach(pair => {
        result.push([arr[i], pair]);
      });
    }

    if (!map.has(arr[i])) {
      map.set(arr[i], []);
    }
    map.get(arr[i]).push(arr[i]);
  }

  return result;
}

function mergeAndSort(arr) {
  return arr.sort((a, b) => a - b);
}

function findDoubleCombinations(arr, target) {
  const result = [];
  const mergedArr = mergeAndSort(arr);

  for (let i = 0; i < mergedArr.length; i++) {
    const complement = target - mergedArr[i];
    const combinations = findCombinations(mergedArr.slice(i + 1), complement);
    combinations.forEach(combination => {
      combination.unshift(mergedArr[i]);
      result.push(combination);
    });
  }

  return result;
}

// Example usage
const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

console.log("First Combination For '4':");
console.log(findCombinations(arr, target));

console.log("Merge Into a single Array:");
const mergedArr = mergeAndSort(arr);
console.log(mergedArr);

console.log("Second Combination For '8':");
console.log(findDoubleCombinations(mergedArr, target * 2));