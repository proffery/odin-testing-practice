const calculator = (() => {
    function add(num1, num2) {
        return num1 + num2
    }

    function subtract(num1, num2) {
        return num1 - num2
    }

    function divide(num1, num2) {
        if(num2 == 0) {
            return 'ERROR'
        }
        else {
            return num1 / num2
        }
    }

    function multiply(num1, num2) {
        return num1 * num2
    }
    return {add, subtract, divide, multiply}
})()

export default calculator