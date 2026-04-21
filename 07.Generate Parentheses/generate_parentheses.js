/* 
    https://leetcode.com/problems/generate-parentheses/
    22. Generate Parentheses
*/

/* 
    1. Bruth Force

    Example 1:

    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]
    Example 2:

    Input: n = 1
    Output: ["()"]

    It needs to start wtih ( -> open parentheses

    Let's create a well-formed parentheses based on n = 2

    ()() ->
        If ( is inserted, ) need to be come 
    

    (()) ->
        If ( is inserted, another ( can come

    n = 2

    ( 
        (
            (❌
            )
                ( ❌
                ) ✅ -> "(())"
        )
            (   ) ✅ -> "()()"
                ) ❌

            )❌
                       
    ) ❌     


    It looks like TREE structure 
    -> Tree?!!! -> We can use 'Recursive' structure 
        -> If we decide to use 'Recursive' structure, we need to know when recursive is done first.
        -> Condition of recursive call done:
            -> 1) If 'open - parantheses is more than n'
            -> 2) If 'closed-parantheses is more than open paranthese'
            -> 3) Or when well-formed parantheses is generated. (the number of open and closed parantheses is same with n)

    TC: O(4^n * n) -> number of nodes ≈ 2^(2n) = 4^n
    SC: O(n)
*/
let generateParenthesis = function(n) {
    let result = []

    let dfs = function (text, opening_cnt, closing_cnt) {
        if (opening_cnt === n && closing_cnt === n) {
            return result.push(text)
        }

        if (opening_cnt > n || closing_cnt > n || opening_cnt < closing_cnt) {
            return 
        }

        /* Memory Issue: all stacked string passed to the recursvie function */
        dfs(text + "(", opening_cnt + 1, closing_cnt)
        dfs(text + ")", opening_cnt, closing_cnt + 1)
    }

    dfs("", 0 , 0 )

    return result
}

/* 
    Solve those 2 issues from generateParenthesis()
    - Unnecessary branch called
    - cost of the string concatenation

    TC: O(2^n) : Big O of two to the n
    SC: O(n)
*/
let generateParenthesis_2 = function(n) {
    let result = []
    let path = []

    let dfs = function(opening_cnt, closing_cnt) {
        if (opening === n && closing === n) {
           return result.push(path.join("")) 
        }

        // Prune invalid states before recursion.
        // Only add "(" if we still have opening parentheses left.
        // Only add ")" if it does not break validity.
        if( opening_cnt < n ){
            path.push("(")
            dfs(opening_cnt + 1, closing_cnt)
            path.pop() //choose → explore → undo (backtracking)
        }

        if( closing_cnt < opening_cnt ){
            path.push(")")
            dfs(opening_cnt, closing_cnt+1)
            path.pop() //choose → explore → undo (backtracking)
        }
    }

    dfs(0,0)

    
    return result

}