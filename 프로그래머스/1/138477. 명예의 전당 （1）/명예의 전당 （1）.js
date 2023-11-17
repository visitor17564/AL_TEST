function solution(k, score) {
    let answer = [];
    let best = []
    for (a = 0; a <= score.length - 1; a++)
        if (a <= k - 1) {
          best.push(score[a]);
          best
          best.sort((a, b) => b-a);
          best
          answer.push(best[a])
        } else {
          best[k - 1] > score[a] ? "" : (best[k - 1] = score[a]);
          best.sort((a, b) => b-a);
          answer.push(best[k-1])
        }
    return answer;
}