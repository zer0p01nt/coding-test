function solution(s) {
    if (s === "1") {
        return [0, 0]
    }
    
    let loop = 0;
    let zeros = 0;
    
    while (s !== "1") {
        let zero = s.split("0").length - 1
        zeros += zero
        s = s.replaceAll("0", "")
        
        s = s.length.toString(2).toString()
        loop++
    }
    
    return [loop, zeros]
}