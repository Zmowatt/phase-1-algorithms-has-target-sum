function hasTargetSum(array, target){
  
  for(let i=0; i < array.length; i++ ) {
    for(let j = i + 1; j < array.length; j++){
      if( array[i] + array[j] === target){
      
        return true;

      }      
    }

  }
  return false
}




/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  
  take the first number
    add it to the second number
      if it equals the target
        return the numbers
*/

/*
  Add written explanation of your solution here

  For this code, our function will iterate over the our array starting at the first number assign that number to 'i'. 
  For each iteration, it will iterate over the array again starting at the second number, assigning that number to 'j'. 
  Each time it will add 'i' and 'j' together and check if it equals the target number. If not, it will move on to the next number, assigning it to 'j' and adding it to 'i'.
  If it passes through entire array without matching the target value, our function will move to the next number to be assigned to 'i', and start over from the number after our 'i' (hence j = i +i).
  It will iterate through the remaining numbers, assigning them to 'j', adding them to 'i' and comparing them to the target value.
  Our function will continue this process until it finds a match or reachs the end our array.
  Should at any point, our function find a match, it will return 'true'. Otherwise, it will return 'false'.
  This indicates that no combonation of two numbers will give us the target value.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("")

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 8, 32, 412, 3, 31], 15))

}

module.exports = hasTargetSum;
