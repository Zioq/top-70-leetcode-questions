/* 
    46. Permutations
    
    Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

    A permutation is a rearrangement of all the elements of an array.

    Input: nums = [1,2,3]
    Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

/* 

 * @param {number[]} nums
 * @return {number[][]}

    Look for all possibilities

    [1,2,3]
     ^
    
    1을 넣고, 2/3이 남음
    1을 넣고, 2을 넣고, 3이 남음
    1을 넣고, 2을 넣고, 3을 넣음 [1,2,3]
    1을 넣고, 

    [1,2,3]
     ^

    picked | unpicked
    [1]     [2,3]
    [1,2]   [3]
    [1,2,3] [] Done, push this picked arr

    [1]     [2,3]
    [1,3]   [2]
    [1,3,2] [] Done, push this picked arr


    [2],    [1,3]
    [2,1]   [3]
    [2,1,3] [] Done, push this picked arr

    [2]     [1,3]
    [2,3]   [1]
    [2,3,1] [] Done, push this picked arr




    1
        2
            3 = [1,2,3] -> 1,2,3 다 들어갔으니까 이전 단계로 점프
        3
            2 = [1,3,2] -> 

    2   
        1   
            3 = [2,1,3]
        3
            1 = [2,3,1]

    3   
        1
            2 [3,2,1]
        
        2
            1 [3,2,1]
*/
let permute = function(nums) {
    let permutations = []

    let dfs = function(picked, unpicked) {
        // 1. set up the end condition
        if(unpicked.length === 0){
            return permutations.push([...picked])
        }

        // 2. how to build child nodes
        for (let i=0; i<unpicked.length; i++) {
            let chosen = unpicked[i] // [0,1,2], chosen = 0

            // new picked = current pick + chosen
            // new unpiced = all left except chosen

            let newPicked = [...picked, chosen] // [0]
            // newUnpicked: [0,1,2] -> [1,2]    
            let newUnpicked = [ ...unpicked.slice(0,i), // [ ]
                                ...unpicked.slice(i + 1) ] // [1,2]
            
            dfs(newPicked, newUnpicked)
        }
    }
    dfs([], nums)
    return permutations
}

/* 
    TC: O(n*n!)
    SC: O(n)

*/
let permute_2 = function(nums) {
    let permutations = []

    let dfs = function (picked, unpicked) {
        // 1. set up the end condition
        if(unpicked.length === 0){
            permutations.push([...picked])
            return
        }

        for (let i = 0; i<unpicked.length; i ++) {
            picked.push(unpicked[i])
            const newUnpicked = [
                ...unpicked.slice(0,i),
                ...unpicked.slice(i +1 )
            ]
            dfs(picked, newUnpicked)
            picked.pop()
        }
    }

    dfs([], nums)

    return permutations
}