// Find a duplicate number in an array of integers
// Return: integer — the duplicate number
// Assumptions: if no duplicate is found, return false;
// This problem can be easily solved using a hash.
// As we go through the array, we use the hash to keep track of
//  which numbers we have seen before. If we encounter a number we
//  have seen before, we return the number.

const arr = [1,2,3,4,5,6,7,7,8,6,10];

function findDupes (arr) {
  const observed = {};
  for(let i = 0; i < arr.length; i++) {
    if(observed[arr[i]]) {
      return arr[i]
    } else {
      observed[arr[i]] = arr[i];
    }
  }

  return false;
}

console.log(findDupes(arr)); // Returns 7

// The reason this works, is that by setting observed[arr[i]] = arr[i],
//  we can do a simple hash look-up with observed[arr[i]],
//  which will return true or false if the key-value pair exists or not.
