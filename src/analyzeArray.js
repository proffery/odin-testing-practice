function analyzeArray(arr) {
    function average() {
        let sum = 0

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum / arr.length
    }

    function min() {
        let min = arr[0]

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }

        return min
    }

    function max() {
        let max = arr[0]

        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i]
          }
        }
      
        return max
    }

    function length() {
        return arr.length
    }

    return {
        average: average(),
        min: min(),
        max: max(),
        length: length()
    }
}

export default analyzeArray