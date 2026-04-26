## 📦 Move Zeroes

## 🧩 Problem

Given an integer array `nums`, move all `0`s to the end while maintaining the relative order of non-zero elements.

## Constraints

- Must be **in-place**
- Maintain **relative order**
- Optimize time complexity


## Core Mental Model
> ❌ Move zeros to the back
> ✅ Move non-zero values to the front

## Interview Takeaways ⭐
1. Two pointers can reduce O(n²) → O(n)
2. Think "placement" instead of "movement"
3. In-place problems = mutation awareness
4. JS arrays are passed by reference

## Senior Insight
This problem is not about moving zeroes.
It’s about:
- Stable partitioning
- In-place transformation
- Pointer-driven data movement