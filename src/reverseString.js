const reverseString = function(string) {
    let stringToArr = string.split("")
    let revArr = new Array(stringToArr.length)
        for (let i = 0; i < stringToArr.length; i++) {
            revArr[i] = stringToArr[stringToArr.length - i - 1]
        }
    return revArr.join("")
}
export default reverseString