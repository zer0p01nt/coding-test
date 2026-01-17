function solution(picture, k) {
    let result = [];
    for (const line of picture) {
        const expandedLine = line.split("").map(char => char.repeat(k)).join("");
        for (let i = 0; i < k; i++) {
            result.push(expandedLine);
        }
    }

    return result;
}