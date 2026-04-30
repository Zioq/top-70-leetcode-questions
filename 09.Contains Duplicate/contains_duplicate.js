/*  
    Contains Duplicate
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

    Input: nums = [1,2,3,1]

    Output: true

    Explanation:

    The element 1 occurs at the indices 0 and 3.

    Input: nums = [1,2,3,4]

    Output: false

    Explanation:

    All elements are distinct.
*/

/* 
    Brute Force
    [1,2,3,1]
     i     j 
     i = 0 
      j = 1 -> ❌
      j = 2 => ❌
      j = 3 => ✅ -> return 

      TC: O(n^2) Big O n to 2 Nested loops over n elements
      SC: O(1) -> we don't use memeory
*/
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for( let j = i +1; j < nums.length; j++ ) {
            if(nums[i] === nums[j]) {
                return true
            }
        }
    }

    return false
}

/* 
 * Optimizaing using a set
    [1,2,3,1]
           ^

     map = [
      '1' => 2, => ✅ -> return 
      '2' => 1,
      '3' => 1
  
    ]

    Set = [
        1, already has? -> ✅ return
        2,
        3,
    ]
    Time: O(n)
    Space: O(n)

*/
var containsDuplicate_2 = function(nums) {
    let set = new Set()

    for(let i = 0; i<nums.length; i++) {
        if(set.has(nums[i])) {
            return true
        }

        set.add(nums[i])
    }
    return false
}



nums = [1,2,3,4]
console.log(containsDuplicate(nums))
console.log(containsDuplicate_2(nums))