//Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let salary = (baseSalary + bonus) - (baseSalary * taxRate); //calculating the net salary
    return `Net Salary: $${salary.toFixed(2)}`; //displaying net salary
};

console.log(calculateSalary(5000, 500, 0.1)); //"Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); //"Net Salary: $6950.00"