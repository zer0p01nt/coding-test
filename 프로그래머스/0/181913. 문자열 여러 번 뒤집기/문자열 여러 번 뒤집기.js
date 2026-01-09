function solution(my_string, queries) {
    let stringArr = my_string.split("")
    queries.map(([s,e]) => {
        let str = stringArr.slice(s,e+1).reverse()
        stringArr.splice(s,((e+1)-s),...str)
        
    })
    return stringArr.join("")
}