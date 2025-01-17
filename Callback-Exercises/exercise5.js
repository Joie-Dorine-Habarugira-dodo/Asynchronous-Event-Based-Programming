function transformString(text, callback1, callback2) {
    text = callback1(text)
    text = callback2(text)
    return text
}
function uppercase(text) {
    return text.toUpperCase()
}
function reverse(text) {
    return text.split('').reverse().join('');
}
console.log(transformString('hi', uppercase, reverse))

// Input: "hello world"
// Expected output with uppercase and reverse callbacks:
// "DLROW OLLEH"
