function solution(arr, delete_list) {
    delete_list.map((n) => {
        arr = arr.filter((num) => num !== n)
    })
    return arr
}