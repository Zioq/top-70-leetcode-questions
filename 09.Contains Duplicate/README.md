# Contains Duplicate – Key Takeaways

## 1. Recognize the Pattern
This is a classic **"seen before?"** problem.

Whenever the problem asks:
- "Does any value repeat?"
- "Have we seen this before?"

→ Think **Set or HashMap**

---

## 2. Trade-off: Time vs Space

| Approach       | Time Complexity | Space Complexity |
|---------------|---------------|------------------|
| Brute Force   | O(n^2)        | O(1)             |
| Hash Set      | O(n)          | O(n)             |

Optimizing time often requires additional space.

---

## 3. Why Set Works

- `Set.has()` → O(1)
- `Array.includes()` → O(n)

Switching data structures drastically changes performance.

---

## 4. Mental Model

Iterate through the array:
1. If element is already in Set → duplicate found
2. Otherwise → add to Set

---

## 5. Interview Tip

Always start with brute force, then optimize:
1. Explain O(n²)
2. Identify inefficiency
3. Introduce Set → O(n)

This shows strong problem-solving progression.

## Set vs Map – When to Use

### Use Set when:
- You only care about existence
- Example: "Have we seen this value before?"

### Use Map when:
- You need to store additional data
- Example:
  - frequency counting
  - value → index mapping
  - metadata storage

### In this problem:
Set is preferred because:
- We only need to check duplicates
- No extra information is required

Using Map works, but is unnecessary overhead.