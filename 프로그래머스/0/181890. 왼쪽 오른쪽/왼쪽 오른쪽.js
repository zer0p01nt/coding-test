function solution(str_list) {
    if (str_list.includes("l") || str_list.includes("r")) {
        const lIndex = str_list.indexOf("l") === -1 ? 21 : str_list.indexOf("l")
        const rIndex = str_list.indexOf("r") === -1 ? 21 : str_list.indexOf("r")
        
        if (lIndex < rIndex) {
            return str_list.slice(0, lIndex)
        } else {
            return str_list.slice(rIndex+1)
        }
    } else {
        return []
    }
    
}