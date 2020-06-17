var maxProfit = function(prices) {    
    let maxProfit = 0;    
    let buyPrice = prices[0];    
    for (let i = 1; i < prices.length; i++){        
        if (buyPrice < prices[i]){            
            let profit = prices[i] - buyPrice            
            if (profit > maxProfit){                
                maxProfit = profit            
            }        
        } else {            
            buyPrice = prices[i]        
        }    
    }    
    return maxProfit
};