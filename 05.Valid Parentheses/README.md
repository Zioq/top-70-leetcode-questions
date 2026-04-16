## Stack
🔥 Why Stack is the Right Approach
**Core Idea**
> The most recently opened bracket must be closed first.

Example:
```
( [ { } ] )
      ↑
   closes first
```
👉 This is a Last-In, First-Out (LIFO) pattern.

**Direct Mapping to Stack**
📌 Stack = LIFO (Last In, First Out)
- The last element added is the first one removed
- This perfectly matches the nested structure of parentheses

**When to Use a Stack**
📌 Use a stack when:
- There is a nested structure
- You need to match pairs
- You must compare with the most recent element