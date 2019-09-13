{/**### The formula for the LTV - Lifetime Value of a customer in business
### LTV = (ARPA * Gross Margin)/ CCR
### APRA: Average Revenue Per Account (The average MRR across all of your active customers)
### Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). 
### Customer Churn Rate: The rate at which your customers are cancelling their subscription.
*/}

var ltvFunction = function(APRA, grossMargin, customerChurnRate) {

  var ltv = (APRA * grossMargin)/customerChurnRate;

  return ltv;
}

console.log(ltvFunction(10, 2, 5));

console.log("Steve thinks the LTV should be " + ltvFunction(30, 4, 5));

console.log("John thinks the LTV should be " + ltvFunction(67, 32, 400));
