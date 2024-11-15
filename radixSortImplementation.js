
var arr = [456, 102, 500,234,122,112,12,345,123,333,432];

// Get maximum element from the array
var maxElement = Math.max(...arr);
let len = arr.length;

console.log("Original array: ", arr);

// Call countSort, passing the number of passes (or just a static label for now)





function radixSort(arr, maxElement)
{

    for(i=1; maxElement/i >0;i*=10)
    {
        countSort(arr, maxElement);
    }
}

// Call radixSort

radixSort(arr, maxElement);
console.log("Sorted by radix algo array: ", arr);


function countSort(array, maxElementOfArray) {
    // Create the count array and initialize it to 0
    var count = new Array(maxElementOfArray + 1).fill(0);
    var output = new Array(array.length).fill(0);
    
    // Store count of occurrences in count[]
    for (var i = 0; i < array.length; i++) {
        count[array[i]]++;
    }
    
    // Change count[i] so that it now contains actual position of this number in output[]
    for (var i = 1; i <= maxElementOfArray; i++) {
        count[i] += count[i - 1];
    }
    
    // Build the output array
    for (var i = array.length - 1; i >= 0; i--) {
        output[count[array[i]] - 1] = array[i];
        count[array[i]]--;  // Decrease the count for duplicate elements
    }
    
    // Copy the sorted elements into the original array
    for (var i = 0; i < array.length; i++) {
        array[i] = output[i];
    }
    
   
  
}