function solution(my_string) {
    const arr = my_string.replace(/[^0-9]/g, 'x').split("x").filter(Boolean)
    return arr.length === 0 ? 0 : arr.length === 1 ? +arr[0] : arr.reduce((a, c) => +a + +c)
}