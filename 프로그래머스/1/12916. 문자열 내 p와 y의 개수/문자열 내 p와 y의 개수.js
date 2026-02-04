function solution(s){
    let p = (s.split("p").length - 1) + (s.split("P").length - 1)
    let y = (s.split("y").length - 1) + (s.split("Y").length - 1)
    return p === y
}