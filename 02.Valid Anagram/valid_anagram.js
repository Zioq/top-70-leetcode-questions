/* 
 Valid Anagram
 Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 anagram: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

*/



/* 
	1. Brute Force
	Sorting two strings and compare it.

	SC: O(n) for storing sorted array
	TC: O(n log n) due to sorting

*/
var isAnagram = function(s, t) {
	if (s.length !== t.length) return false

	let s_sort = [...s].sort() // 🔥 O(n log n)
	let t_sort = [...t].sort() // 🔥 O(n log n)

	for(let i =0; i< s_sort.length; i++) {
		if(s_sort[i] !== t_sort[i]) {
			return false
		}
	}
	return true

}

/* 
	2. Use Map
	Add a key-value pair based on s
	and then remove values based on the t

	SC: O(n) (But if characters are only lowercase a-z then O(26), so O(1))
	TC: O(n)

	-> Optimizing TC using a map
*/
var isAnagram_2 = function (s, t) {
	if (s.length !== t.length) return false;
	let map = new Map();

	for (c of s) {
		if( map.has(c) ) {
			map.set(c, map.get(c) + 1 )
		} else {
			map.set(c, 1)
		}	
	}

	for(c of t) {
		if(!map.has(c)) return false // 🔥 

		if( map.has(c) ){
			map.set(c, map.get(c) -1)
		}

		if(map.get(c) === 0) {
			map.delete(c)
		}
	}

	return map.size === 0 

} 
var s = "anagram"
var t = "nagaram"
console.log(isAnagram_2(s, t))

