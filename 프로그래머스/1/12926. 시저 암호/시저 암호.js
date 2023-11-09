function solution(s, n) {
    let answer = "";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = upper.toLowerCase();
    for (a = 0; a <= s.length - 1; a++) {
        s[a] === " "
            ? (answer += " ")
            : upper.indexOf(s[a])!==-1 && upper.indexOf(s[a]) + n <= 25
            ? (answer += upper[upper.indexOf(s[a]) + n])
            : upper.indexOf(s[a]) + n > 25
            ? (answer += upper[upper.indexOf(s[a]) + n - 26])
            : lower.indexOf(s[a])!==-1 && lower.indexOf(s[a]) + n <= 25
            ? (answer += lower[lower.indexOf(s[a]) + n])
            : lower.indexOf(s[a]) + n > 25
            ? (answer += lower[lower.indexOf(s[a]) + n - 26])
            : "";
    }
    return answer;
}