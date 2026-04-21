## Tree Structure + Backtracking

### ❌ Why I didn't realize this question as Tree / Backtracking

#### 😶‍🌫️ Initial Mistake
I instictively categorized it as a **stirng problem**

#### 🔍 Root Cause Anlaysis
1. Pattern Recognition was not automated.
- What I did: "String Input" -> "String Problem"
- What I had to do: "Generate all combination" -> "Tree / Backtracking"

2. Misunderstanding of "Tree"
- What I was implicitly thinking: 
    - Tree = Binary Tree problems
    - Tree = Explicit node/left/right structure
- But, the "tree" in this problem
    - A conceptual state space where each decision branches into multiple possibilities

#### 🚨 Key Signals I Missed
1. “Generate all combinations”
> Almost always implies tree traversal (DFS / Backtraking)

2. "Multiple choices at each step"
> Add `(` or `)`. This naturally forms a decision tree.

3. “Constraints must be satisfied”
> Cannot close more than opened
> Cannot exceed `n`
-> Requires **pruning invalid branches** → Backtracking

#### 🔄 Correct Mental Model
```
1. Do I need to generate all possible combinations?
2. Do I have multiple choices at each step?
3. Are there constraints to filter invalid cases?
```
If all answers are **YES**:
> This is a Tree + Backtracking problem

#### 🌳 Reframing the Problem
I should think:
> "Start from an empty state and explore all possible decisions step by step"
This forms a tree likes
```
          ""
        /     \
      "("     ")"
     /   \
   "(("  "()"
   ...

```

#### 🧩 Key Takeaway
> Failure to recognize the underlying pattern early

#### 📈 Improvement Strategy
**1. Explicit Pattern Labeling**

 ```
    Pattern: Backtracking / DFS / Tree
    Reason:
    - Generates all combinations
    - Has branching choices
    - Requires pruning
 ```

**2. Force the Right Question**
```
    "Can this be modeled as a tree (brute-force search space)?"
```

**3. Reinforce Core Pattern Set**
Practice these problems repeatedly:
- Subsets
- Permutations
- Combination Sum
- Letter Combinations of Phone Number
- Generate Parentheses

These form a core backtracking pattern library.