/* 
    125. Valid Palindrome
    https://leetcode.com/problems/valid-palindrome/

    Given a string s, return true if it is a palindrome, or false otherwise.
*/

/* 1. Brute Force: 
    - Save string in the array
    - and save reverse of the array 
    - Compare it both

    TC: O(n) for loop
    SC: O(n) 
*/
var isPalindrome = function(s) {

    let clean_s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let arr = clean_s.split("")
    let reverse_arr = arr.toReversed();

    for(i = 0; i < arr.length; i++) {
        if(arr[i] !== reverse_arr[i]) {
            return false
        }
    }
    return true
}

/* 
 2. Use two pointers
 ex) abcba
     ^   ^

     if left_i and right_i value is same,
        move pointer
    else
        return false

    TC: O(n/2) = O(n)
    SC: O(n) => Because of clean up 

*/
var isPalindrome_2 = function(s) {
    let clean_s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let left = 0
    let right = clean_s.length -1 

    while(left < right) {
        if (clean_s[left] != clean_s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

isPalindrome('A man, a plan, a canal: Panama')



