function solution(arr) {
  let gcd = function(a, b) {
      if (b === 0) {
          return a;
      }
      return gcd(b, a % b);
  }

  let lcm = function(a, b) {
      return (a * b) / gcd(a, b);
  }

  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
      answer = lcm(arr[i], answer);
  }
  return answer;
}