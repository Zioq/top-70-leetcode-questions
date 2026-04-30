/* 
    121. Best Time to Buy and Sell Stock
    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

/* 

    Brute Force

    Condition:
        - maximum profit 
        - We cannot sell before the buy day.
        - the future price should be greater than the buy price.

    [7,1,5,3,6,4]
    ^ 
    
    Day 1 (i=0) | profit: 0
    7 > 1 (x)
    7 > 5 (x)
    7 > 3 (x)
    7 > 6 (x)
    7 > 4 (x)

    Day 2 (i=1) profit: 4
    1 < 5 -> calculation 5-1 = 4 | compare current profit. if current profit is smaller than profit, then update current profit
    1 < 3 -> calculation 3-1 = 2 | coma
    ...


    TC: O(n^2)
    SC: O(1)

*/
var maxProfit = function(prices){
    let max_profit = 0
    for(let i = 0; i< prices.length; i++) {
        for(let j = i + 1; j<  prices.length; j ++) {
            if(prices[i] < prices[j] ) {
                let profit =  prices[j] - prices[i]
                if(profit > max_profit) {
                    max_profit = profit
                }
            }
        }
    }
    return max_profit
}   

/* 
    How to optimize TC? O(n^2) -> O(n)
    
    - Condition
    1. Single loop
    2. Check the current price + how much make the profit if we sell it today
        profit = today price - past price 
        how to calculate maximum profit of today?
        max_profit = today price - the most cheapest price

        🔥 Remember only cheapest one
        
    [7,1,5,3,6,4] -> 
    [7,1,1,1,1,1] -> running minimum
    [-7,0,4,2,5,3] -> profit list 
    
    TC: O(n)
    SC: O(1)
*/
var maxProfit_2 = function(prices) {
    let max_profit = 0
    let min_price = prices[0]
    for(let i = 0; i<prices.length; i++) {
        min_price = Math.min(min_price, prices[i])
        max_profit = Math.max(max_profit, prices[i]- min_price)
    }

    return max_profit
}



prices = [7,1,5,3,6,4]
console.log(maxProfit_2(prices))