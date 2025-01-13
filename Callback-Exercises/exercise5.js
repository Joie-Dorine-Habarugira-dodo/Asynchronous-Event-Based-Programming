function transformString(text, callback1, callback2) {
    callback1(text)
    callback2(text)
}
function uppercase( callback){
    callback(text)
    console.log(text.toUpperCase())
}
function reverse(text){
    console.log(text.split('').reverse().join(''))

    
   
}
transformString('hello world', uppercase(reverse), reverse)
// Input: "hello world"
// Expected output with uppercase and reverse callbacks:
// "DLROW OLLEH"