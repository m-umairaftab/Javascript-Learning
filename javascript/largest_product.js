function maxProduct(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxProduct = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        // Calculate the maximum and minimum products
        const prod1 = currentMax * num;
        const prod2 = currentMin * num;

        // Find the new current maximum and minimum
        currentMax = Math.max(num, prod1, prod2);
        currentMin = Math.min(num, prod1, prod2);

        // Update the maximum product if necessary
        maxProduct = Math.max(maxProduct, currentMax);
    }

    return maxProduct;
}

const nums = [2, 3, -2, 4];
const result = maxProduct(nums);
console.log(result);

