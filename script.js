//your code here
function majorityElement(arr) {
    let majority = nums[0], count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
            count = 1;
        } else if (majority === nums[i]) {
            count++;
        } else {
            count--;
        }
    }
    return majority;
}
