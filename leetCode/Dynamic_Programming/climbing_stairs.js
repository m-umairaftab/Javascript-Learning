

function climbStairs(n) {
    // if (n <= 2) {
    //     return n;
    // }

    // Initialize an array to store the number of ways to reach each step.
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;  // There's only 1 way to reach the first step.
    dp[2] = 2;  // There are 2 ways to reach the second step (1 step + 1 step or 2 steps).

    // Calculate the number of ways for each step from step 3 to n.
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// Example usage:
const n1 = 2;
console.log(climbStairs(n1));  // Output: 2

const n2 = 3;
console.log(climbStairs(n2));  // Output: 3
