
// Javascript program to find Maximum Product Subarray

/* Returns the product of max product subarray.*/
function maxSubarrayProduct(arr, n)
{
	// Initializing result
	let result = arr[0];

	for (let i = 0; i < n; i++)
	{
		let mul = arr[i];
		// traversing in current subarray
		for (let j = i + 1; j < n; j++)
		{
			// updating result every time
			// to keep an eye over the maximum product
			result = Math.max(result, mul);
			mul *= arr[j];
		}
		// updating the result for (n-1)th index.
		result = Math.max(result, mul);
	}
	return result;
}

// Driver code

	let arr = [ 1, -2, -3, 0, 7, -8, -2 ];
	let n = arr.length;
	document.write("Maximum Sub array product is "
		+ maxSubarrayProduct(arr, n));
	

// This code is contributed by Mayank Tyagi

