function solution(X, Y) {
    var answer = "";
    for (a = 9; a >= 0; a--) {
        const regex = new RegExp(a, "g");
        const countX = (X.match(regex) || []).length;
        const countY = (Y.match(regex) || []).length;
        if (countX === 0 || countY === 0) {
            continue;
        }
        if (countX < countY) {
            for (b = 1; b <= countX; b++) {
                answer += String(a);
            }
        } else {
            for (b = 1; b <= countY; b++) {
                answer += String(a);
            }
        }
    }
    if (answer === "") {
        answer = "-1";
    }
    if (answer[0] === "0") {
        answer = "0";
    }
    return answer;
}