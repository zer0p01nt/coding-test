function solution(rank, attendance) {
    let arr = [];

    for (let i = 0; i < rank.length; i++) {
        if (attendance[i]) {
            arr.push({ rank: rank[i], index: i });
        }
    }

    let [a, b, c] = arr.sort((a, b) => a.rank - b.rank).slice(0, 3).map(candidate => candidate.index);

    return 10000 * a + 100 * b + c;
}