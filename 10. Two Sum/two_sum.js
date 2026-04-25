/* 
    Two Sum
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
    
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

/* 
    Bruth Force: 
    - Use nexted loop

    [2,7,11,15] target = 9
    i = 0  -> 2 
        j = 1 -> 7 ✅ return 

    TC: O(n^2)
    SC: O(n)

*/
var twoSum = function (nums, target) {
    let result = [];

    for (let i = 0; i<nums.length; i++) {
        for (let j = i+1; j< nums.length; j++ ){
            if(nums[i] + nums[j] === target) {
                result.push(i, j)
            }
        }
    }
    return result
}

/* 
    Optimized algorithm.

    [2,7,11,15] target = 9
     
    what about using a map?
    why? we can save index & value
    okay
    then what should be added in the map?

    target - nums[i] = the value 

    check the value is already saved in the map

    TC: O(n)
    SC: O(n)


*/
var twoSum_2 = function(nums, target) {
    let result = [];
    let map = new Map()

    for(let i = 0; i< nums.length; i++) {
        const diff = target - nums[i]

        if(map.has(diff)) {
            return [i, map.get(diff)]
        }
        map.set(nums[i], i)
    }

    return result
}


let nums = [3,2,4]
let target = 6
console.log(twoSum_2(nums, target))
