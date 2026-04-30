/* 
    283. Move Zeroes

    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
    Note that you must do this in-place without making a copy of the array.


    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

    Input: nums = [0]
    Output: [0]

*/



/* 

    Brute Force
    [0,1,0,3,12]

    Condition:
    1) Moves all 0 to the end
    2) Maintaining the relative order
    3) must do this in-place    

    2 pointers?
    compare i and j 
    if i is = 0 and j is not 0 switch


    [0,1,0,3,12]
     ^ ^
     1,0,0,3,12
       ^   ^
     1,3,0,0,12
         ^    ^
    
     1,3,12,0,0

     TC: O(n^2) Because we're using inner loop
     SC: O(1)
*/
function moveZeroes(nums) {
    
    for( let i = 0; i <nums.length; i ++ ) {
        for (let j = i + 1; j<nums.length; j++ ) {
            if( nums[i] === 0 && nums[j] !==0 ) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }

    return nums
}

/* 
    Can we optimzie TC?(On^2)
    Instead of inner loop, try to use a single interation
    -> Let move all non-zero vlaues to front 
    
    z
    0,1,0,3,12
      i
    
      z
    1,0,0,3,12 
          i

        z
    1,3,0,0,12
             i
*/
function moveZeroes_2(nums) {
    let z = 0
    for(let i = 0; i< nums.length; i++) {
        if( nums[i] !==0 ) {
            [ nums[i], nums[z] ] = [ nums[z], nums[i] ]
            z++
        }
    }
    return nums
}


let nums = [0,1,0,3,12]
console.log(moveZeroes_2(nums))
