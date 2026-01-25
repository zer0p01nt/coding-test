function solution(numbers) {
    const ns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for (let i = 0; i < nums.length; i++) {
        numbers = numbers.replaceAll(nums[i], ns[i])
    }
    
    return +numbers
}