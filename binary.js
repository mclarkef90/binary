let recursiveFunction = function (arr, x, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return true;

  if (arr[mid] > x)
    return recursiveFunction (arr, x, start, mid-1);
}
else
