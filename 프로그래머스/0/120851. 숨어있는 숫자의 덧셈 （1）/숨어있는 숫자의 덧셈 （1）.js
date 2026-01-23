function solution(my_string) {
    return my_string.split("").filter((s) => Number.isInteger(+s)).reduce((a, c) => +a + +c)
}