# Best Time to Buy and Sell Stock (LeetCode 121)

## 🧩Problem
Given an array prices where prices[i] is the price of a stock on day i,
find the maximum profit you can achieve.
- You may choose one day to buy and a different day in the future to sell
- Return the maximum profit
- If no profit is possible, return 0

## Brute Force Approach
### 💡Idea
- Try every possible pair of `(buy, sell)`
- Calculate profit and keep track of the maximum
### Complexity
- Time: `O(n^2)`
- Space: `O(1)`

## 🚀Optimzied Approach (One Pass)
### 💡Key Insight
> We don't need to check all previous prices.
> We only need to track the minimum price so far
At each day:
- Treat it as a selling day
- Calculate profit using the cheapest price seen so far
### 🧠Core Fomular
profit = current price - minimum price so far
### Complexity
- Time: `O(n)`
- Space: `O(1)`

## 🧠Pattern
### 🔥This problem is about:
Tracking the "best so far" (running minimum)

## Key takeaway
- Avoid re-checking all previous values
- Compress past information into a **single variable**
- Think: "Do I really need all previous values, or just one summary?"

## 🧠Interview Tip
At each step, we only need the minumum price seen so far,
because that represents the best buying opportunity.

## 🏁 Summary
Instead of comparing all past values,
carry forward the best one.

