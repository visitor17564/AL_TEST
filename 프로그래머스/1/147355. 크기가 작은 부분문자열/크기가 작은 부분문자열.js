function solution(t, p) {
    var answer = 0;
    for (a = 0; a <= t.length - p.length; a++) {
        t.substr(a, p.length) <= p ? (answer += 1) : "";
    }
    return answer;
}