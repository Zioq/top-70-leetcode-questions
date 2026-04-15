 /**
     * @param {string[]} strs
     * @returns {string}
     * 
     * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
     * 
     *  0 <= strs.length < 100
        0 <= strs[i].length < 200
        strs[i] contains any possible characters out of 256 valid ASCII characters.

        ex) strs: ["Hello", "world", "how are you"]
        ex) dummy_input = ["4|t","f%@", "4:3"]
        
        Helloworldhow are you

        -> We need a divider to seperate the string as original array
            - we need a seperator
                - ex)Hello|World|How are you
                -> This seperator cannot handle the case where "|" included. 
            - So we need a `number` marker to count how many characters should be combined together in the decode
            - First number -> Show many characters should be combined
            - After -> The target characters should be combined based on the number we've got
                original: ["4|t", "f%@", "4:3"]
                encoded: "3|4|t3|f%@3|4:3"
                
        n: total number of characters across all strings.
        TC: O(n)
        SC: O(n)
    * 
    */
class Solution {
   
    encode(strs) {
        let encoded_text = ""
        for(const text of strs) {
            encoded_text += `${text.length}|${text}`
        }
        return encoded_text
    } 
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded_arr = []
        let start = 0;
        
        while(start < str.length) {

            //5|Hello5|world11|how are you

            // Find divider idx
            let divider_idx = str.indexOf("|", start)
            // Get the text_length -> It located right before divider idx
            let text_length = parseInt(str.substring(start, divider_idx)) //substring(indexStart, indexEnd): indexEnd will be excluded.

            let origin_text = str.substring(divider_idx + 1, divider_idx + 1 + text_length)
            decoded_arr.push(origin_text)

            start = divider_idx + 1 + text_length
        }
        return decoded_arr
    }
}

let encoder = new Solution()

let strs = ["Hello", "world", "how are you"]
let encode = encoder.encode(strs)
console.log(encoder.decode(encode))