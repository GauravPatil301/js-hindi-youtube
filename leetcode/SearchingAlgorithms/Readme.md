# Searching in JavaScript

### Linear Search in JavaScript

```javascript
const arr = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 8));
console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.find((num) => num > 0));
console.log(arr.findIndex((num) => num < 0));
```

### Binary Search In JavaScript

```javascript
const BinarySearch = (arr, target) => {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        else if (arr[mid] > target) {
            end = mid - 1;
        }

        else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log(BinarySearch([1, 4, 6, 9, 12, 15], 8));
```

### Binary Search using Recursion

```javascript
const BinarySearchRecur = (arr, target) => {
    return BinarySearchUtil(arr, target, 0, arr.length);
}

const BinarySearchUtil = (arr, target, start, end) => {
    if (start > end)
        return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    else if (arr[mid] > target) {
        return BinarySearchUtil(arr, target, start, mid - 1);
    }

    else {
        return BinarySearchUtil(arr, target, mid + 1, end);
    }
}
```

### Find floor and ceil value of X in an array 

```javascript
const floorCeil = (arr, target) => {
    let start = 0, end = arr.length;
    let floor = -1, ceil = -1;
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] === target){
            floor = mid;
            ceil = mid;
            return [ceil, mid]
        }

        else if(arr[mid] > target){
            ceil = mid;
            end = mid - 1;
        }

        else {
            floor = mid;
            start = mid + 1;
        }
    }

    return [ceil, floor]
}
```

## Practice Questions

### Level 1
- [Sqrt(x)](https://leetcode.com/problems/sqrtx/)
```javascript
function mySqrt(x) {
    if(x === 0 || x=== 1){
        return x
    }
    let start = 0,end =x;
    let mid;
    while(start<=end){
        mid= Math.floor((start+end)/2)
        if(mid*mid === x){
            return mid
        }else if(mid*mid<x){
            start = mid + 1
        }else{
            end = mid -1
        }
    }
    return end
}
console.log(mySqrt(9))
```

- [First Bad Version](https://leetcode.com/problems/first-bad-version)
```javascript
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end = n
        while(start<=end){
            let mid = Math.floor((start+end)/2)
            if(isBadVersion(mid)){
                end = mid - 1
            }else{
                start = mid + 1
            }
        }
        return start
    };
};
```

- [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  if (needleLength === 0) return 0;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    let found = true;

    for (let j = 0; j < needleLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
};

// Example usage
const haystack = "hello";
const needle = "ll";
const result = strStr(haystack, needle);
console.log('Index of', needle, 'in', haystack, 'is:', result);

```

- [Binary Search](https://leetcode.com/problems/binary-search)
```javascript

```

- [Search Insert Position](https://leetcode.com/problems/search-insert-position)
```javascript

```

- [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array)

### Level 2
- [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)
```javascript

```

- [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)
```javascript

```

- [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
```javascript

```

- [Find Peak Element](https://leetcode.com/problems/find-peak-element)
```javascript

```

- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array)
```javascript

```