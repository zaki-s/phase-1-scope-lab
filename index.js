// Write your solution in this file!

// 1. Declare a global variable called customerName
var customerName = "bob";

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer (declaring a global variable inside a function)
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicitly global (bad practice, but for learning purposes)
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// 5. Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = "someone annoying";

// 6. Function to attempt changing leastFavoriteCustomer (will cause an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "definitely not bob"; // This will throw an error!
}
