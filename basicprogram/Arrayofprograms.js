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


// Sort an array of 0s, 1s and 2s | Dutch National Flag problem

// Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

// Javascript program to sort an array of 0, 1 and 2

	// Sort the input array, the array is assumed to
	// have values in {0, 1, 2}
	function sort012(a,arr_size)
	{
		
		let lo = 0;
		let hi = arr_size - 1;
		let mid = 0;
		let temp = 0;
		// Iterate till all the elements
		// are sorted
		while (mid <= hi)
		{
			// If the element is 0
			if(a[mid] == 0)
			{
				temp = a[lo];
				a[lo] = a[mid];
				a[mid] = temp;
				lo++;
				mid++;
			}
			// If the element is 1
			else if(a[mid] == 1)
			{
				mid++;
			}
			// If the element is 2
			else
			{
				temp = a[mid];
				a[mid] = a[hi];
				a[hi] = temp;
				hi--;
			}
			
		}
	}
	
	/* Utility function to print array arr[] */
	function printArray(arr,arr_size)
	{
		let i;
		for (i = 0; i < arr_size; i++)
		{
			document.write(arr[i] + " ");
		}
		document.write("<br>");
	}
	
	/*Driver function to check for above functions*/
	let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
	
	let arr_size = arr.length;
	sort012(arr, arr_size);
	printArray(arr, arr_size);
	
	// This code is contributed by rag2127


// Find Subarray with given sum | Set 1 (Non-negative Numbers)	

// Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.

// Note: There may be more than one subarray with sum as the given sum, print first such subarray. 

// A simple program to print subarray with sum as given sum
 
// Returns ture if the there is subarray of arr[] with sum equal to sum otherwise returns false. Also, prints the result

function subArraySum(arr, n, sum) {
	// Pick a starting point
	for(let i=0;i<n ;i++){
		let currentSum = arr[i];
		if( currentSum == sum){
			console.log("Sum found at indexes " +i)
			return;
		} else{
			// Try all subarrays strating with 'i'
			for(let j=i+1 ; J < n; j++){
				currentSum += arr[j];
				if(currentSum == sum){
					console.log("Sum found between indexes "+ i + " and  "+j);
					return ;
				}
			}
		}
	}

	console.log(" No Sub array found");
	return ;
}
 
let arr = [15, 2,4,8,9,5,10,23];
let n = arr.length;
let sum = 23;

// Length property of an Array returns the length of an Array. The length of an Array is always one more than the highest index of an Array.
var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
// len contains the length of the array
var len = house.length;
for (var i = 0; i < len; i++)
	console.log(house[i]);//Output 1BHK


	// : Accessing Array Elements of an Array in JavaScript are indexed from 0 so we can access array elements as follows.

	var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
    console.log(house[0]+" cost= "+house[1]);
    var cost_1BHK = house[1];
    var is_for_rent = house[5];
    console.log("Cost of 1BHK = "+ cost_1BHK);
    console.log("Is house for rent = ")+ is_for_rent;