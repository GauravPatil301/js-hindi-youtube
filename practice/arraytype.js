// Insertion in array

const arr = new Array(3);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr.toString)

console.log(arr[2])
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

let matrix = [[4,5],[34,45],[8,9]]
for(let i=0;i<3;i++){
    for(let j=0;j<2;j++){
        console.log(`Matrix[${i}][${j}] = ${matrix[i][j]}`)
    }
}

let matrix = [[4,5],[34,45],[8,9]]
for(let i=0;i<3;i++){
    for(let j=0;j<2;j++){
        console.log(`Matrix[${i}][${j}] = ${matrix[i][j]}`)
    }
}

// Initializing while declaring
let arr1 = new Array(3)
arr1[0] = 10
arr1[1] = 20
arr1[2] = 30
console.log("Array 1: ", arr1)

// Creates an array having elements 10, 20, 30, 40, 50
let arr2 = new Array(10, 20, 30, 40, 50);
console.log("Array 2: ", arr2)

// Creates an array of 5 undefined elements
let arr3 = new Array(5);
console.log("Array 3: ", arr3)

// Creates an array with one element
let arr4 = new Array("1BHK");
console.log("Array 4: ", arr4)
