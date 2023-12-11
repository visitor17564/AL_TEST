function solution(players, callings) {
  let answer = players;
  const mapAnswer = new Map();
  for (a = 0; a < answer.length; a++) {
    mapAnswer.set(answer[a], a);
  }
  mapAnswer;
  for (a = 0; a < callings.length; a++) {
    let callIndex = mapAnswer.get(callings[a]);
    let now = answer[callIndex];
    let before = answer[callIndex - 1];
    answer[callIndex] = before;
    mapAnswer.set(before, callIndex);
    answer[callIndex - 1] = now;
    mapAnswer.set(now, callIndex - 1);
  }
  return answer;
}