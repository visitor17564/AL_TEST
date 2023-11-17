function solution(k, m, score) {
    let answer = 0;
    let boxNum = Math.floor(score.length / m);
    score.sort((a, b) => b - a);
    for (a = 1; a <= boxNum; a++) {
        answer += score[a*m-1] * m;
    }
    return answer;
}