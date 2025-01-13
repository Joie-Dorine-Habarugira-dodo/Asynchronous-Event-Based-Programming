function counter(callback) {
    callback()
}
function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000*i)
        
    }
}

counter(printNumbers)

// Expected output (one number per second):
// 1
// 2
// 3
// 4
// 5