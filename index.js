function largestSubarraySum(arr) {
    if (arr == null) {
        return 0; 
    }
    let globalMax = Number.NEGATIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    let runningCount = 0;

    arr.forEach(num => {
        runningCount = Math.max(num, runningCount + num);
        max = Math.max(max, runningCount);
        globalMax = Math.max(max, globalMax);
    });
    return globalMax <= 0 ? 0 : globalMax;
}