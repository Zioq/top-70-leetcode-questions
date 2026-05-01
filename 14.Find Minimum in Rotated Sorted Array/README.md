# Find Minimum in Rotated Sorted Array

## 🧩Problem
Given a sorted array that has been rotated between 1 and n times,
find the minimum element in O(log n) time.

## Constraints
- Array is originally sorted in ascending order
- All elements are unique
- Must run in O(log n) → Binary Search required

## 💡 Key Insight

After rotation, the array is split into two sorted subarrays:
`[4,5,6,7]` + `[0,1,2]`
                ^
                Minimum

The minimum value is the pivot point between the two sorted parts.

## Core Idea (Binary Search)
We use Binary Search and compare:

`nums[mid]` vs `nums[right]`

## 🧠 Interview Talking Points
Why compare with nums[right]?
> Because nums[right] is always part of a sorted segment,
> so it provides a reliable reference to determine which side contains the minimum.

## Why Binary Search works here?
> Even after rotation, the array maintains partial sorted structure,
> allowing us to eliminate half of the search space each time.

## 🔥 Key Takeaway
Binary Search is not just about finding a value. It’s about finding a reliable condition to eliminate half the search space.