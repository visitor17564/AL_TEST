function solution(brown, yellow) {
  let answer = [];
  // 둘다 합치면 넓이가 나옴
  let sum = brown + yellow;
  // 넓이를 구할 수 있는 약수의 조합을 구해야함
  for(a=Math.floor(sum/2);a>=1;a--){
    if((a-2)*(sum/a-2) === yellow){
      answer.push(a, sum/a)
      break
    }
  }
  // 테두리를 제외한 yellow는 
  return answer;
}