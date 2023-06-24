// A Naive javascript program to find
// maximum sum rotation // Returns maximum value of i*arr[i]
	function maxSum(arr , n) {
		// Initialize result
		var res = Number.MIN_VALUE;

		// Consider rotation beginning with i
		// for all possible values of i.
		for (i = 0; i < n; i++) {

			// Initialize sum of current rotation
			var curr_sum = 0;

			// Compute sum of all values. We don't
			// actually rotation the array, but compute
			// sum by finding indexes when arr[i] is
			// first element
			for (j = 0; j < n; j++) {
				var index = (i + j) % n;
				curr_sum += j * arr[index];
			}

			// Update result if required
			res = Math.max(res, curr_sum);
		}

		return res;
	}

	// Driver code
	
		var arr = [ 8, 3, 1, 2 ];
		var n = arr.length;
		document.write(maxSum(arr, n));

// This code contributed by umadevi9616
