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
        - cannot sell past day's buy
        - to make a profit, future market value should be gigger than the day we bought

    [7,1,5,3,6,4]
    ^ 
    
    Day 1 (i=0) | profit: 0
    7 > 1 (x)
    7 > 5 (x)
    7 > 3 (x)
    7 > 6 (x)
    7 > 4 (x)

    Day 2 (i=1) profit: 4
    1 < 5 -> calculation 5-1 = 4 | compare current profit. if current profit is samller than profit, then update current profit
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

prices = [7,6,4,3,1]

console.log(maxProfit(prices))