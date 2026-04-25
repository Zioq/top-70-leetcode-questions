/* 
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

    Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array [index1, index2] of length 2.

    The tests are generated such that there is exactly one solution. You may not use the same element twice.

    Your solution must use only constant extra space. O(1)
    
    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

*/


/* 
    Condition: 
    1) sorted in non-decreasing order
    2) each incremented by one, as an integer array [index1, index2] of length 2. -> Need to return the array with index +1, not the value.

    3) use only constant extra space. O(1) -> Which means, we should not use extra space. Use the numbers array we are given


    2 pointer? 
    - left / right
    - why? = we can seach fast in the sorted arry. 
        - when left pointer move? -> when we need a much smaller value
        - when right pointe move? -> when we need a much bigger vlaue

    ex) [1, 2, 4, 6, 7, 9, 10, 11, 12] target 9
         ^                          ^
    1 + 12 = 13 vs 9 -> If we left pointer move, the value increase (14). So Right pointer should be move. 
    1 + 11 = 12 vs 9 -> Same
    1 + 10 = 11 vs 9 -> Same
    1 + 9 = 10 vs 9 -> Same
    1 + 7 = 8 vs 9 -> At this time, we found out that 9 is bigger. So let move right pointer
    2 + 7 = 9 vs 9 -> ✅

    As we need to compare the value till find the value, -> Let's use while loop

*/
let twoSum = function (numbers, target) {
    let left = 0 
    let right = numbers.length - 1 
    
    while(left < right) {
        let sum = numbers[left] + numbers[right]
        if(sum > target) {
            right --
        } else if (sum < target) {
            left ++
        } else {
            return [left +1, right +1]
        }
    }
}


let numbers = [2,7,11,15]
let target = 9

console.log(twoSum(numbers, target))