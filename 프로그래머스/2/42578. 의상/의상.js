function solution(clothes) {
    let answer = 0;
    let typeCount = new Map()

    clothes.forEach(c => {
        typeCount.set(c[1], (typeCount.get(c[1]) ?? 0) + 1)
    })

    answer = [...typeCount.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1

    return answer;
}