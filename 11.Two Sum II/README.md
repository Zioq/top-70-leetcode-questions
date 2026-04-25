# Two Sum II - Key Insights

## Why Two Pointers?
- Array is sorted → can eliminate search space in O(1) each step

## Movement Strategy
- sum > target → move right pointer (reduce sum)
- sum < target → move left pointer (increase sum)

## Complexity
- Time: O(n)
- Space: O(1)

## Mental Model
"Sorted array → think from both ends"

## Additioanl point for real-world
Add an edge case contoller
```
throw new Error("No valid pair found")
```