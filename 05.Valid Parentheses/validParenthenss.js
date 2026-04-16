
/* 

 20. Valid Parentheses

 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        Every close bracket has a corresponding open bracket of the same type.

    Example 1:  
    Input: s = "()"
    Output: true

    Example 2:
    Input: s = "()[]{}"
    Output: true

    Example 3:
    Input: s = "(]"
    Output: false

    Example 4:
    Input: s = "([])"
    Output: true

    s consists of parentheses only '()[]{}'

    ([)] -> false
    
    Can we use pointer...? Maybe not
    ( [ ] ) 
    ^     ^ 
    ( ) [ ] { } 
      ^       ^

    Like Tetris! 
        Stack them in one by one
        if same open parentheses meets close parentheses, then delete it (or )
        ex)
        ( 
        ({
        ({} -> remove same opener and closer
        () -> remove same opener and closer
        empty -> then it's valid Parentheses!


*/

/*  1. Use a stack: 
    
    Condition:
    - should start with (, { or [ (open)
    
    We need a store place to save with opener and closer
    when opener is already saved in, closer should be found 

    TC: O(n) 
    SC: O(n)
    
*/
var isValid = function(s) {
    if(s.length === 0 ) return false

    let parentheses = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    let stack = []

    for(const c of s) {
        // Stack it
        if(c in parentheses) {
            stack.push(c)
        } else {  
            let top = stack.pop();
            if(!top || parentheses[top] !== c) return false
        }

    }  
    return stack.length === 0
}
s = "]"
console.log(isValid(s))