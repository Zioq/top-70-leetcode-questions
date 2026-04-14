# JS String 
Because JavaScript strings are immutable, replace() and toLowerCase() create new strings rather than modifying the original one in place. So this solution uses O(n) extra space.

# While loop
Although there are nested loops, each pointer only moves in one direction and never revisits elements, so each character is processed at most once. Therefore, the total time complexity is O(n).