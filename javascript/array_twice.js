function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  }
  
  const nums = [1, 2, 3, 1];
  console.log(containsDuplicate(nums));
  