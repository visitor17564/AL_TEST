function solution(lottos, win_numbers) {
    let answer = [];
    let sameNumber = lottos.filter((num) => win_numbers.includes(num));
    let zeroCount = lottos.filter((num) => num === 0);
    let reward = [6, 5, 4, 3, 2, 1];
    if (sameNumber.length === 6) {
        answer.push(1);
        answer.push(1);
    } else {
        zeroCount.length === 0
            ? sameNumber.length === 0? answer.push(6)
            : answer.push(reward[sameNumber.length - 1])
            : answer.push(reward[sameNumber.length - 1 + zeroCount.length]);
        sameNumber.length === 0
            ? answer.push(6)
            : answer.push(reward[sameNumber.length - 1]);
    }
    return answer;
}