function solution(survey, choices) {
  let answer = "";
  let obj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  for (a = 0; a <= choices.length - 1; a++) {
    // 4점은 걍스킵
    if (choices[a] === 4) {
      continue;
    }
    // 1~3은 survey[a][0]에 점수추가
    if (choices[a] < 4) {
      choices[a] === 1
        ? (obj[survey[a][0]] += 3)
        : choices[a] === 2
        ? (obj[survey[a][0]] += 2)
        : (obj[survey[a][0]] += 1);
    }
    // 4~6은 survey[a][1]에 점수추가
    if (choices[a] > 4) {
      choices[a] === 5
        ? (obj[survey[a][1]] += 1)
        : choices[a] === 6
        ? (obj[survey[a][1]] += 2)
        : (obj[survey[a][1]] += 3);
    }
  }
  // 각각비교
  obj["R"]>=obj["T"]?answer+="R":answer+="T"
  obj["C"]>=obj["F"]?answer+="C":answer+="F"
  obj["J"]>=obj["M"]?answer+="J":answer+="M"
  obj["A"]>=obj["N"]?answer+="A":answer+="N"
  return answer;
}