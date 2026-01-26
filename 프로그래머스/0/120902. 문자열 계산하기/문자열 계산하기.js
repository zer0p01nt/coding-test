function solution(my_string) {
    const arr = my_string.split(" ")
    let result = 0;
    for (let i = 1; i < arr.length; i+=2) {
        if (i === 1) {
            if (arr[i] === "+") {
                result += (+arr[i-1] + +arr[i+1])
            } else if (arr[i] === "-") {
                result += (+arr[i-1] - +arr[i+1])
            }
        } else {
            if (arr[i] === "+") {
                result += +arr[i+1]
            } else if (arr[i] === "-") {
                result -= +arr[i+1]
            }
        }
        
    }
    return result
}