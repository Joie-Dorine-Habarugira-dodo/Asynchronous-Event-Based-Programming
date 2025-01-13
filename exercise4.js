function filterArray(array, testCallback) {
    testCallback(array)
}
function evenNumbersTest(arr){
    let even=arr.filter(num=>num%2===0)
console.log(even);
}
function greaterThan5(arr){
    let greater=arr.filter(num=> num>5)
    console.log(greater);
    
}

filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],greaterThan5)

// Example array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output with even number test: [2, 4, 6, 8, 10]
// Expected output with numbers greater than 5: [6, 7, 8, 9, 10]