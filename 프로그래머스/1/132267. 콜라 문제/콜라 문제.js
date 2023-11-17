function solution(a, b, n) {
    let answer = 0;
    let bottle = n;
    while (bottle >= a) {
        answer += Math.floor(bottle / a) * b;
        let left = bottle % a;
        bottle = Math.floor(bottle / a) * b;
        bottle += left;
    }
    return answer;
}