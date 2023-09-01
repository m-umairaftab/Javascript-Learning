function missingNumber(nums) {
    const n = nums.length;
    let missing = n;

    for (let i = 0; i < n; i++) {
        missing ^= i ^ nums[i];
    }

    return missing;
}

const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

const nums2 = [0, 1];
console.log(missingNumber(nums2)); // Output: 2

const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums3)); // Output: 8
