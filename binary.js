let arr = [1,2,3,4,5,6,7,8,9,10]
let x= 7
let start= 0
let end= arr[arr.length-1]
console.log(end)

function recursiveFunction(arr, x, start, end) {
  if (start > end) {
    return false};

  let mid = Math.floor((start + end) / 2);
  console.log(mid)
  console.log(arr[mid])
  console.log(x)

  if (arr[mid] === x) {
     console.log("true")
   };

  if (arr[mid] > x) {
     recursiveFunction(arr, x, start, mid-1)
   }

  else {
    recursiveFunction (arr, x, mid+1, end)
  }
}

console.log(recursiveFunction(arr, x, start, end))

let iterativeFunction = function(arr, x) {
  let start=0
  let end= arr[arr.length-1]

  while (start <= end) {
    let mid= Math.floor((start + end)/2)

    if (arr[mid] === x) return true;

    else if (arr[mid] < x) start= mid+1;
    else end= mid-1;
  }
  return false;
}

if (iterativeFunction(arr, x, 0, arr.length-1))
    console.log("Element found!");
else console.log("Element not found!");

x = 6;
