/* 
 Group Anagrams
 Given an array of strings strs, group the anagrams together. You can return the answer in any order.


 Input: strs = ["eat","tea","tan","ate","nat","bat"]
 Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

/* 
 1. Bruth-Force

 Sort all text in the array
 and grouping them in the map.

 TC: O(n log n) because of JS sorting ❌
 SC: O(n) for the map ❌

 🔥 More cleared answer
 n: length of str
 k: lenght of characters in the str

 TC: O( n * k log k )
    O(k log k) for sorting a each element of strs
    n: number of elements

 SC: O(n * k)

*/
var groupAnagrams = function(strs) {
    let sortedArr = []
    for(let chars of strs) {
        sortedArr.push([...chars].sort().join(""))
    }

    let map = new Map();
    
    for(let i = 0; i<sortedArr.length; i++) {
        // If not in the map, add it
        if(!map.has(sortedArr[i])){
           map.set(sortedArr[i], [strs[i]]) 
        } else {
            // let existing = map.get(sortedArr[i])
            // let newArr = [...existing, strs[i]] 
            // existing.push(strs[i])
            // map.set(sortedArr[i], existing)
            /* 
                ^ 
                ⚠️ Inefficient due to it creates a new array on every update; spread operator copies all existing elements -> leads to extra time and memory overhead.
                🔥 It's more effiecent to mutate the existing array using `.push()`
            */
            map.get(sortedArr[i]).push(strs[i])
        }
    }
    return [...map.values()]
}


/* 
 *  Try not to use sort
    Character count (Frequencey Vector)

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


    // Count the frequency of each character in the string
    eat ={
    'e' => 1
    'a' => 1
    't' => 1
    }
    ate => {
    'a' => 1,
    't' => 1,
    'e' => 1    
    }

    So eat and ate is an anagram, Use this info as a key
    
    // How can we format above info as key?
    
    // [0,0,0,0,0,0,0....] -> make an 26 length array for characters and if `a` found, then increment first element of the array
    abb => [1,2,0,0,0,....]

    // Convert the frequency array into a string so it can be used as a map key

    n: length of str
    k: lenght of characters in the str

    TC: O(n * k)
    SC: O(n * k):

*/
var groupAnagrams_2 = function(strs) {
    let map = new Map()

    for(const word of strs) {
        let format_arr = new Array(26).fill(0)
        for(const char of word) {
            // Convert lowercase English character to a 0-25 index
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            format_arr[index]++
        }
        let key_string = format_arr.join("#")
        // console.log(key_string, word)
        /* 
        1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0 eat
        1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0 tea
        1#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0 tan
        1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0 ate
        1#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#1#0#0#0#0#0#0 nat
        1#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0 bat
        */

        if(!map.has(key_string)) {
            map.set(key_string, [])
        }
        map.get(key_string).push(word)
    }

    return [...map.values()]
}

/* 
 Group anagrams using a character frequency map
 Works with non-alphabetic characters as well.

 TC: O(n * (k + u log u))
 - k = length of each word
 - u = number of unique characters in the word

 
 SC: O(n* k)


*/
var groupAnagrams_3 = function(strs) {
    const groups = new Map();


    for(const word of strs) {
        const charCount = new Map();

        // Count frequencey of chacater
        for(const char of word) {
            charCount.set(char, (charCount.get(char) || 0 ) + 1)
        }

        // Sort keys so the signature is deterministic
        const sortedChars = [...charCount.keys()].sort()
        
        // Build a key
        let key = ""
        for (const char of sortedChars) {
            key += `${char}:${charCount.get(char)}|`
        }
        
        if(!groups.has(key)) {
            groups.set(key, [])
        }

        groups.get(key).push(word)
    }

    return [...groups.values()];
} 

strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams_2(strs))

strs_2 = ["eat!", "tea!", "a!te", "bat", "tab", "123", "231"]
console.log(groupAnagrams_3(strs_2))
