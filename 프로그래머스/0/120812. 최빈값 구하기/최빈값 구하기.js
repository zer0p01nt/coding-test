function solution(array) {
    const acc = array.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
    },{})
    
    const modeVal = Math.max(...Object.values(acc))
    const modeValKeys = Object.entries(acc).filter(([k, v]) => v === modeVal).map(([key, value]) => key);
    
    if (modeValKeys.length > 1) {
        return -1
    } else {
        return +modeValKeys[0]
    }
    
}