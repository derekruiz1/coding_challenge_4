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

//Task 3
let stock = 10
while (stock >= 0) {
    console.log(stock)
    stock -= 1;
} //Reducing Stock by 1 until it reaches 0

//Task 4 
let responces = 0
do {
    responces++
    console.log(responces);
} while (responces <= 2); //Responces keep adding until it reaches 3

//Task 5
let employee = {
    name: "Ciara",
    position: "Manager",
    salary: 100000
}; //Employee Information

for (let key in employee) {
   console.log(`${key}: ${employee[key]}`)
    }; //Displaying employee information

//Task 6
let products = ["AirPods", "Iphone", "Macbook"] //Array of Products

for (let product of products) {
    console.log(`${product}`);
}; //Displaying products

//Task 7
let orders = [476, 999, 137] //Array of orders

orders.forEach(order => {
    console.log(`${order}`)
}); //Displaying Orders
