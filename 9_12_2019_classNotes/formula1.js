{/**### The formula for the LTV - Lifetime Value of a customer in business
### LTV = (ARPA * Gross Margin)/ CCR
### APRA: Average Revenue Per Account (The average MRR across all of your active customers)
### Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). 
### Customer Churn Rate: The rate at which your customers are cancelling their subscription.
*/}
var APRA = 8000;
var grossMargin = 200;
var customerChurnRate = 3;

ltv = (APRA * grossMargin)/customerChurnRate;

console.log(ltv);

