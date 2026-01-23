function solution(numbers, direction) {
    if (direction === "right") {
        let last = numbers.pop();
        numbers.unshift(last);
    } else {
        let first = numbers.shift();
        numbers.push(first);
    }
    return numbers
}