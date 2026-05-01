/* 
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

*/


/* 
    Brute Force
    Use the Math.min method

    TC: O(n)
    SC: O(1)

*/
var findMin = function(nums) {
    let min = Math.min(...nums)
    return min
}


/* 
    How to optimize TC to run in O(log n)?

    Condition
    1. TC: O (log n) -> Binary Search ?
    2. Array is sorted in asending order is rotated
        What is that mean?
        We compare nums[mid] with nums[high] to determine where the minimum lies.

        [3,4,5,1,2]
             ^
       Case 1:
        nums[mid] > nums[high]
        - mid is in the left sorted portion
        - minimum must be in the right part
        - move low = mid + 1

        Case 2:
        nums[mid] <= nums[high]
        - right side is sorted
        - minimum is at mid or to the left
        - move high = mid (include mid)

        Loop ends when low === high -> minimum index

*/
var findMin_2 = function(nums) {

    let low = 0
    let high = nums.length - 1

    while(low < high) {
        let mid = Math.floor((low + high) / 2)
        if(nums[mid] > nums[high]) {
            low = mid + 1
        } else {
            high = mid // Mid should be included.
        }
    }

    return nums[low]
}

nums = [3,4,5,1,2]
console.log(findMin_2(nums))