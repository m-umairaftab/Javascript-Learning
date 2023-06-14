function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n);

    // Calculate the product of all elements to the left of each element
    answer[0] = 1;
    for (let i = 1; i < n; i++) {
        answer[i] = answer[i - 1] * nums[i - 1];
    }

    // Calculate the product of all elements to the right of each element
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}

const nums = [1, 2, 3, 4];
const answer = productExceptSelf(nums);
console.log(answer);
