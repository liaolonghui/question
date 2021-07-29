var maxSubArray = function(nums) {
    let result = []
    let sum = 0
    let max = nums[0]

    nums.forEach((num, i) => {
        if (i===0 || (sum + num) < num) {
            result = [num]
            max = Math.max(max, num)
            sum = num
        } else {
            result.push(num)
            max = Math.max(max, sum + num)
            sum += num
        }
    })

    return max
};