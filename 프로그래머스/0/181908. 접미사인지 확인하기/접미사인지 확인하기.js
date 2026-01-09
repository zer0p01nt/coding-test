function solution(my_string, is_suffix) {
    const suffix = Array.from(my_string).map((_, i) => my_string.slice(-i))
    return suffix.includes(is_suffix) ? 1 : 0
}