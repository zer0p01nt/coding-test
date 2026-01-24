function solution(s) {
    let sum = 0;
    const arr = s.split(" ")
    arr.map((str, i) => {
        if (str === "Z") {
            sum -= +arr[i-1]
        } else {
            sum += +str
        }
    })
    return sum
}