//your code here
function majorElement(arr) {
    arr.sort((a, b) => a - b);

  const l = arr.length;

  if (l % 2 === 0) {
    console.log(arr[l / 2])
  } else {
    console.log(arr[(l - 1) / 2])
  }
}
