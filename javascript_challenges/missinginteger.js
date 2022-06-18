/* Given an array of integers, 
find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place. */


/* arr = [3, 4, -1, 1] */
arr = [1, 2, 0]

/* First sort the array */

arr.sort((a, b) => {  return a - b;  });

for (let i = 0; i < arr.length; i++) {
    /* Starting from positive integers */
    if (arr[i] >= 0) {

        /* Substract each element from the one in the next position */
        /* if result is greater than 1, return the substracted number + 1 */
        if ( arr[i + 1] - arr[i] > 1 ) {
            console.log("Missing integer: ", arr[i] + 1);
            break

        /* also do that if you reach the end of the array without logging a result */
        } else if ( arr[i + 1] == undefined ) {
            console.log("Missing integer: ", arr[i] + 1);
        }

    }
    
};
