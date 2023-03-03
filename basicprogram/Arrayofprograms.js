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
    
}
        