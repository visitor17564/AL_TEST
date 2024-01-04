function solution(n) {
  // 피보나치 수열로 변경
  let answer = [];
    for(a=0;a<=n;a++){
      if(a<=1) {
        answer.push(1)
      } else {
        answer.push((answer[a-1]%1234567) + (answer[a-2]%1234567))
      }
    }
  return answer[n]%1234567;
}