function solution(s) {
  let answer = 0;
  let guide = 0;
  let countGuide = 0;
  let countVal = 0;
  // 첫글자 찾으셈

  for (a = 0; a <= s.length - 1; a++) {
    if (s[a] === s[guide]) {
      countGuide++;
      if (a === s.length - 1 && countVal !== countGuide) {
        answer++;
      }
      continue;
    } else {
      countVal++;
      if (a === s.length - 1 && countVal !== countGuide) {
        answer++;
      }
    }
    if (countVal === countGuide) {
      answer++;
      guide = a + 1;
      countGuide = 0;
      countVal = 0;
    }
  }
  answer;

  return answer;
}