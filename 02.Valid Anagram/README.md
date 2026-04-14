## Sort
- 🔥 JS basic sort: O(n log n)
```
let s_sort = [...s].sort()
let t_sort = [...t].sort()
```
1. spread([...s]) -> O(n)
2. .sort() -> O(n log n)
Total TC: O(n log n) + O(n log n) + O(n)

✅ Loop -> O(n)
✅ Sort -> O(n log n)
O(n log n) > O(n)
✔︎ O(n log n)



## Map
- Stores Key-value pair
- Keys can be any type (objects, functions...)
- Kesy must be unique; values can duplicate
- Methods
    - `map.set(key, value)`
    - `map.get(key)`

## VS Set
- Stores unique value only
- NO KEY, ONLY VALUE
- Method
    - `set.add(value)`
- Fast Lookups:
    Checking if a value exists using .has(value) is significantly faster in a Set(O(1)) than using .includes() in an Array(O(n)), especially for large datasets.


### Map VS Array
Array is faster because it uses direct indexing and benefits from better cache locality, while Map involves hashing and indirect memory access.

Array-based counting is faster than Map because it avoids hashing and uses direct index access with better cache locality. Both are O(n), but array has lower constant time and O(1) space when the character set is fixed. (Array(26) vs Map)
