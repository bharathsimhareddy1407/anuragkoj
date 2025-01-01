// calculator.js 
function add(a, b) { 
    return a + b; 
    } 
    function subtract(a, b) { 
    return a - b; 
    } 
    function multiply(a, b) { 
    return a * b; 
    } 
  
    function divide(a, b) { 
    if (b === 0) { 
    return "Cannot divide by zero!"; 
    } 
    return a / b; 
    } 
    // Print the calculated values 
    console.log("Addition (2 + 3):", add(2, 3)); 
    console.log("Subtraction (5 - 2):", subtract(5, 2)); 
    console.log("Multiplication (4 * 3):", multiply(4, 3)); 
    console.log("Division (10 / 2):", divide(10, 2)); 