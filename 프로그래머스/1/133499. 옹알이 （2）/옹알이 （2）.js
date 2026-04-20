function solution(babbling) {
    const CAN = ["aya", "ye", "woo", "ma"]
    let answer = 0;

    babbling.forEach((bab) => {
        let charList = [...bab];

        let unstableWord = '';
        let prevStableWord = '';

        while (charList.length) {
            unstableWord += charList.shift();
            const isStableWord = CAN.includes(unstableWord);

            if (isStableWord) {
                if (prevStableWord === unstableWord) {
                    continue;
                }

                prevStableWord = unstableWord;
                unstableWord = '';
            }
        }

        if (unstableWord === '') {
            answer++;
        }
    })

    return answer;
}