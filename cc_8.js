//Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let salary = (baseSalary + bonus) - (baseSalary * taxRate); //calculating the net salary
    return `Net Salary: $${salary.toFixed(2)}`; //displaying net salary
};

console.log(calculateSalary(5000, 500, 0.1)); //"Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); //"Net Salary: $6950.00"

//Task 2: Function Expression
function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate); //formula to find final price
    return `Final Price: $${finalPrice.toFixed(2)}`; //displaying final price
};

console.log(calculateDiscount(100, 0.2)); //"Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); //"Final Price: $212.50"

//Task 3: Arrow Function
const calculateServiceFee = (amount, serviceType) => {
    let service;
    if (serviceType === `Premium`) service = .15; //15% of the amount
    if (serviceType === `Standard`) service = .1; //10% of the amount
    if (serviceType === `Basic`) service = .05; //5% of the amount
    let fee = amount * service; //calculating the total
    return `Service Fee: $${fee.toFixed(2)}`; //displaying service fee
};

console.log(calculateServiceFee(200, "Premium")); //"Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); //"Service Fee: $50.00"

//Task 4: Parameters and Arguments
const calculateRentalCost = (days, carType, insurance = false) => {
    let cost = 0;
    if (carType === `Economy`) {
        cost = 40 * days; //$40 per day
    } if (carType === `Standard`) {
        cost = 60 * days; //$60 per day
    } if (carType === `Luxury`) {
         cost = 100 * days; //$100 per day
    };
    if (insurance) cost +=20 * days; //additional $20 per day with insurance

    return `Total Rental Cost: $${cost}`; //displaying total
 };

 console.log(calculateRentalCost(3, "Economy", true)); //"Total Rental Cost: $180"
 console.log(calculateRentalCost(5, "Luxury", false)); //"Total Rental Cost: $500"

 //Task 5: Returning Values
 function calculateLoanPayment(principal, rate, time) {
    let loan = principal + (principal * rate * time); //formula for loan payment
    return `Total Payment: $${loan.toFixed(2)}`; //displaying total
 };

 console.log(calculateLoanPayment(1000, 0.05, 2)); //"Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); //"Total Payment: $6050.00"

//Task 6: Higher-Order Functions
let transactions = [200, 1500, 3200, 800, 2500]; //array with five (5) values
function filterLargeTransactions(transactions, amount) {
    return transactions.filter(amount);
};

console.log(filterLargeTransactions(transactions, amount => amount > 1000)); //[1500, 3200, 2500]