/* 
    https://leetcode.com/problems/longest-palindromic-substring/description/
    Given a string s, return the longest palindromic substring in s.

    palindromic: A string is palindromic if it reads the same forward and backward.

    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.

    Input: s = "cbbd"
    Output: "bb"

*/

/* 
    1. Brute Force: babad

    b ✅
    ba
    bab ✅ => ☑️
    baba
    babad

    a ✅
    ab
    aba ✅ => ☑️
    abd

    b ✅
    ba
    bad

    a ✅
    ad

    d ✅

    TC: O(n^2 * n) = O(n^3)
    SC: O(1)
*/
var longestPalindrome = function(s) {

    let is_palindrome = function(str){
        let left = 0 ;
        let right = str.length - 1
        while (left < right) {
            if (str[left] != str[right]) {
                return false
            }
            left ++
            right --
        }
        return true
    }

    let longest = ""
    // Generate all substrings
    for(let i = 0 ; i < s.length; i ++) {
        for(let j = i; j< s.length; j++) {
            const substr = s.slice(i, j + 1); 
            // Substring ready, check it is palindrome
            if(is_palindrome(substr) && substr.length > longest.length) {
                longest = substr
            }

        }
    }
    return longest
}

/* 
    What if we expands symmetrically from its center?
    Idea: a palindrome expands symmetrically from its center -> Expand Around Center

    babad
    ^    
    => b

    babad
     ^
    => a
    => bab ✅

    babad
      ^
    => b
    => aba ✅

    babad
       ^
    => a

    babad
        ^
    => d

*/
var longestPalindrome_2 = function(s) {
    let max_s = 0;
    let max_e = 0;

    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        // Odd case
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left > max_e - max_s) {
                max_s = left;
                max_e = right;
            }
            left--;
            right++;
        }

        left = i;
        right = i + 1;

        // Even case
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left > max_e - max_s) {
                max_s = left;
                max_e = right;
            }
            left--;
            right++;
        }
    }

    return s.slice(max_s, max_e + 1);
}

s = "babad"
console.log(longestPalindrome(s))
