// Javascript implementation to count subarrays with
// equal number of 1's and 0's

// function to count subarrays with
// equal number of 1's and 0's
function countSubarrWithEqualZeroAndOne(arr, n)
{
	// 'um' implemented as hash table to store
	// frequency of values obtained through
	// cumulative sum
	var um = new Map();
	var curr_sum = 0;

	// Traverse original array and compute cumulative
	// sum and increase count by 1 for this sum
	// in 'um'. Adds '-1' when arr[i] == 0
	for (var i = 0; i < n; i++) {
		curr_sum += (arr[i] == 0) ? -1 : arr[i];
		if(um.has(curr_sum))
			um.set(curr_sum, um.get(curr_sum)+1);
		else
			um.set(curr_sum, 1)
	}

	var count = 0;
	// traverse the hash table 'um'
	um.forEach((value, key) => {
		
		// If there are more than one prefix subarrays
		// with a particular sum
		if (value > 1)
			count += ((value * (value - 1)) / 2);
	});

	// add the subarrays starting from 1st element and
	// have equal number of 1's and 0's
	if (um.has(0))
		count += um.get(0);

	// required count of subarrays
	return count;
}

// Driver program to test above
var arr = [1, 0, 0, 1, 0, 1, 1];
var n = arr.length;
document.write( "Count = "
	+ countSubarrWithEqualZeroAndOne(arr, n));

// This code is contributed by noob2000.
