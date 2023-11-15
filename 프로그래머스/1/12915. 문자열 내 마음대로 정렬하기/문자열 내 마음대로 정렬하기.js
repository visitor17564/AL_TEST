function solution(strings, n) {
  const arr = strings.map((currValue) => currValue[n] + currValue);
  const arr2 = arr.sort();
  const arr3 = arr2.map((currValue) => currValue.slice(1));
  var answer = arr3;
  return answer;
}