console.log(
  "Fibonacci Sequence is Fn=F(n-1)+F(n-2): 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ..."
);

function fibo(n) {
  var a = 1,
    b = 0,
    temp;
  /* while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  */
  for (var i = 0; i <= n; i++) {
    temp = a;
    a = a + b;
    b = temp;
  }
  return b;
}
console.log(fibo(10) + " is 10th index of Fibonacci Sequence");

console.log("What is the index of 55 in Fibonacci Sequence?");
function fiboIndex(num) {
  let arr = [1, 1];
  for (let i = 2; i < num + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
}

console.log(fiboIndex(10));
