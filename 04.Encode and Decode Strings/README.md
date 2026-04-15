## One-Line Takeaway
Never rely on delimiters when data is arbitrary — use length-based encoding for deterministic parsing.
- Real-World Analogy
    - ex) Network Protocol: (HTTP, TCP)
    ```
    [Content-Length: 5]
    Hello
    ```

## Core String Methods Used

### indexOf()
- Return the 'first index' at which a specific substring is found in a stirng. If not found, return -1
```
str.indexOf(searchValue, fromIndex)

#searchValue: the substring to search to
#fromIndex(optional): index to start searching from
```

Example
```
const str = "5|Hello5|world";

str.indexOf("|");       // 1
str.indexOf("|", 2);    // 7
str.indexOf("x");       // -1
```
⚠️ Key Insight
indexOf scans the string from left → right
Time complexity: O(n) in worst case
Safe here because we always move the pointer forward


### substring()
- Extracts a portion of a string between two indices (start and end).
```
str.substring(startIndex, endIndex)
#StartIndex: inclusive
#endIndex: EXCLUSIVE
```

Example
```
const str = "5|Hello";

str.substring(0, 1);   // "5"
str.substring(2, 7);   // "Hello"
```
⚠️ Key Insight
substring does not include endIndex
It is safe for slicing without worrying about overflow
Time complexity: O(k) where k = substring length


indexOf() finds structure boundaries, and substring() extracts data based on those boundaries.
