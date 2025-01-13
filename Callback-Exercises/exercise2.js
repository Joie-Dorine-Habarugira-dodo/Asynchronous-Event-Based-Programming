function formatName(firstName, lastName, callback) {
    let format1= `${firstName} ${lastName}`
    let format2= `${lastName.toUpperCase()}, ${firstName}`
    let format3= `${firstName[0]}. ${lastName}`
    callback(format1)
    callback(format2)
    callback(format3)
}
function format(result){
    
    console.log(result);
    
}

formatName("John", "Doe", format);

// Expected outputs (with different callbacks):
// "John Doe"
// "DOE, John"
// "J. Doe"