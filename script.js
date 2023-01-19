//your code here
function majorityElement(arr) {
    // Initialize an empty hashmap
    let map = {};
    // Iterate through the array and add each element to the hashmap
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === undefined) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }
    // Iterate through the hashmap and find the key with the highest value
    let maxKey = null;
    let maxValue = 0;
    for (let key in map) {
        if (map[key] > maxValue) {
            maxKey = key;
            maxValue = map[key];
        }
    }
    // Check if the maxValue is greater than floor(n/2)
    if (maxValue > Math.floor(arr.length / 2)) {
        return maxKey;
    } else {
        return -1;
    }
}
