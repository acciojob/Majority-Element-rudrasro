//your code here
function majorityElement(arr) {
    arr.sort((a, b) => a - b);

  const l = arr.length;

  if (l % 2 === 0) {
    return arr[l / 2]
  } else {
    return arr[(l - 1) / 2]
  }
}
