## rotate array by 2 position on left
```javascritpt
function rotateArrayByTwoPositions(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return arr;
  }

  const rotations = 2 % arr.length; // To handle cases where rotation is greater than array length

  const firstPart = arr.slice(rotations);
  const secondPart = arr.slice(0, rotations);

  return firstPart.concat(secondPart);
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rotatedArray = rotateArrayByTwoPositions(originalArray);

console.log(rotatedArray); // Output: [3, 4, 5, 6, 7, 8, 9, 1, 2]
```

