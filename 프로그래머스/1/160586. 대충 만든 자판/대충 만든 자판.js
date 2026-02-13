function solution(keymap, targets) {
    const minKeys = new Map();

    keymap.forEach(keys => {
        for (let i = 0; i < keys.length; i++) {
            const char = keys[i];
            const count = i + 1;
            if (!minKeys.has(char) || minKeys.get(char) > count) {
                minKeys.set(char, count);
            }
        }
    });

    return targets.map(target => {
        let totalCount = 0;
        for (const char of target) {
            if (!minKeys.has(char)) {
                return -1;
            }
            totalCount += minKeys.get(char);
        }
        return totalCount;
    });
}