function solution(lines) {
    const table = new Array(200).fill(0);

    for (const [start, end] of lines) {
        for (let i = start; i < end; i++) {
            table[i + 100]++;
        }
    }

    return table.filter(v => v >= 2).length;
}