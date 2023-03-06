// Leaders in an array 

// Javascript Function to print leaders in an array
  
function printLeaders( arr, size)
{
    for (let i = 0; i < size; i++)
    {
        let j;
        for (j = i+1; j < size; j++)
        {
            if (arr[i] <=arr[j])
                break;
        }    
        if (j == size) // the loop didn't break
            console.log(arr[i] + " ");
  }
}
// driver code 
  
        let arr = [ 16, 17, 4, 3, 5, 2 ]; 
        let n = arr.length; 
  
        // Function calling 
        printLeaders(arr, n); 




// Write a program to reverse an array or string

// Given an array (or string), the task is to reverse the array/string.

// Iterative Javascript program to reverse an array 

/* Function to reverse arr[] from start to end */ 
function reverseArray(array,start,end) {
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--
    }
}

// Utility function to print an array 
function printArray(arr,size){
    for(let i=0;i<size;i++){
        console.log(arr[i])
    }
}

// Driver function to test above functions 

let array = [1,2,3,4,5,6];
let n = 6;
// To print original array
printArray(arr,n);

//function calling 
reverseArray(arr,0,n-1);
console.log("Reversed array is:");

// To print the Reversed array
printArray(arr,n);




// Array from method used

console.log(Array.from("hello"))  // [ 'h', 'e', 'l', 'l', 'o' ]

let s = new Set([1,2])
console.log(s)  //{1,2}

Array.from(s); // [1,2]

const arr = [1,2,3];
console.log(Array.from(arr,it => it* 2))
console.log(Array.from({length:5},(it,i)=>i * 2))
console.log(Array.from({length:5},(it,i) => i * 2 +1))