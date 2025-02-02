//Task 1
let purchaseAmount = 250
if (purchaseAmount >= 100 ) {
    purchaseAmount *= 0.8
} else {
    purchaseAmount
}; //Prices $100 and over get a 20% discount

console.log('Final amount after discount:', purchaseAmount );

//Task 2
let sales = [25, 150, 250, 400, 900] //Array of Sales
let SalesReport = 0 

for (let index = 0; index < sales.length; index++) {
    console.log(SalesReport += sales[index]);   
}; // Loop to calculate sales

