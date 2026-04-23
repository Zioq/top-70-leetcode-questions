## Permutations (Backtracking) — Mental Model & Takeaways

### 📌 Problem Essence
> “Generate all possible permutations” → DFS + Backtracking problem

### 🔥 First Reaction (What you should recognize)
```
"Check all possibilities"
→ Can't use simple loops
→ Think: Tree (search space)
→ Use DFS + Backtracking
```
👉All possibilities = Traversing a decision tree

### 🌳 Mental Model: “Translate Tree → Code”
Conceptual Tree
```
          []
      /     |     \
    [1]    [2]    [3]
   /  \    / \    / \
[1,2][1,3]...

```
Each level = one decision
Each branch = one choice

### 🔑 The 2 Core Questions
#### 1️⃣ What is my state? - You must define this first
```
picked   // what I've chosen so far
unpicked // what I can still choose
```
👉 If you can’t define state, you can’t solve backtracking problems.

#### 2️⃣ What are my choices?
```
for (let i = 0; i < unpicked.length; i++)
```
👉 At each step, choose one from the remaining candidates.

### ⚙️ Backtracking Template (Core Pattern)
```
function dfs(state) {
    if (base condition) {
        save result
        return
    }

    for (choice of candidates) {
        choose
        dfs(next state)
        unchoose
    }
}
```
### 🔥 Key Concepts I Struggled With
#### 1️⃣ Why do we remove the chosen element? 
👉 Because each number can only be used once.
```
If you pick 1 → next choices must be [2,3], NOT [1,2,3]
so we pass remaining elements excluding current choice
```

#### 2️⃣ Why is pop() necessary?
👉 To restore the previous state.
```
[1,2,3] → save result
return → must go back to [1,2]
Without pop(), state becomes corrupted.
```
👉 Core pattern:
```
push → dfs → pop
```

#### 3️⃣ Why is copying arrays less optimal?
❌ Copying approach
```
let newPicked = [...picked]
let newUnpicked = [...]
```
👉 Creates new arrays every call
👉 Higher memory + time cost

✅ Backtracking approach
```
picked.push(...)
dfs(...)
picked.pop()
```
👉 Reuses the same array → more efficient

#### 4️⃣ DFS vs Backtracking
```
DFS = traversal strategy
Backtracking = DFS + undoing state
```
Backtracking is a pattern built on DFS


### 🧠 Core Mental Models
#### 🧩 1. “Define the state clearly”
```
picked / unpicked
OR
path / used
```
👉 This is the hardest and most important step.

#### 🌳 2. “Think in terms of a decision tree”
```
Each level = one decision
Each branch = one possible choice
```

#### 🔄 3. “Choose → Explore → Unchoose”
```
path.push(...)
dfs()
path.pop()
```
👉 This is the essence of backtracking.


### 🧠 Interview Takeaways
When you see:
```
"Generate all permutations"
"Return all combinations"
"Find all possibilities"
```
👉 Immediately think:
- Backtracking
- DFS
- Decision tree
- State management


### 🔥  Biggest Learning (Most Important)
You initially:
- ✔ Drew the tree correctly
- ❌ Got stuck translating it into code
👉 The missing link was:
```
"What state does each node represent?"
and
"How do I pass and restore that state?"
```

### 🚀 Final Mental Model
```
Tree = intuition
State = implementation
Backtracking = control
```
