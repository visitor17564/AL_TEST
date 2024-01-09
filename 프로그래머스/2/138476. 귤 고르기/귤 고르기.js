function solution(k, tangerine) {
  let answer = 0;
  let countObj = {};
  // 일단 k를 원소별로 재정렬
  tangerine.sort((a, b) => b - a);
  // 각원소의 갯수를 세서 객체로 만들고
  tangerine
  for (a = 0; a < tangerine.length; a++) {
    if (a === 0) {
      countObj[tangerine[a]] = 1
    }
    else {
      if(tangerine[a]===tangerine[a-1]) {
        countObj[tangerine[a]] += 1
      } else {
        countObj[tangerine[a]] = 1
      }
    }
  }
  // 그 객체를 원소 개수별로 큰 순으로 정렬하고
  let arr = Object.entries(countObj);
  arr.sort((a, b) => b[1] - a[1]);
  // 큰것에서 부터 k를 빼가서 카운트
  for (a = 0; a < arr.length; a++) {
    k -= arr[a][1];
    answer++;
    if (k <= 0) {
      break;
    }
  }
  return answer;
}