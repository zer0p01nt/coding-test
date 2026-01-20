function solution(my_string, n) {
    const arr = my_string.split("")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].repeat(n)
    }
    
    return arr.join("")
}