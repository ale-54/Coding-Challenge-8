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