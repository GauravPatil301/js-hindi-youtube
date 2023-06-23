
// Javascript code to print all possible
// subarrays for given array using recursion

// Recursive function to print all
// possible subarrays for given array
function printSubArrays(arr, start, end)
{
	
	// Stop if we have reached the end
	// of the array	
	if (end == arr.length)
		return;
	
	// Increment the end point and start
	// from 0
	else if (start > end)
		printSubArrays(arr, 0, end + 1);
		
	// Print the subarray and increment
	// the starting point
	else
	{
		document.write("[");
		for(var i = start; i < end; i++)
		{
			document.write( arr[i] + ", ");
		}
		
		document.write(arr[end] + "]<br>");
		printSubArrays(arr, start + 1, end);
	}
	return;
}

// Driver code
var arr = [ 1, 2, 3 ];
printSubArrays(arr, 0, 0);

// This code is contributed by rutvik_56

