function calculate(num1, num2, operationCallback) {
    operationCallback(num1, num2)
}
function operation(x,y){
console.log('sum is: '+ (x+y));
console.log('product is: '+ (x*y));
console.log('quotient is: '+ (x/y));
}
calculate(10,5,operation)

// Expected outputs:
// Addition callback: 15 (for 10, 5)
// Multiplication callback: 50 (for 10, 5)
// Division callback: 2 (for 10, 5)