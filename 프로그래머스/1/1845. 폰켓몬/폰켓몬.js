function solution(nums) {
    let set = [...new Set(nums)]
    let n = nums.length / 2
    return set.length > n ? n : set.length
}