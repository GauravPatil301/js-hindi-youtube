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

<script>
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
</script>
