function solution(number, limit, power) {
    let answer = 0;
    let count = 2;
    for (a = 1; a <= number; a++) {
        if (a === 1) {
            answer += 1;
            continue;
        }
        count = 2;
        for (let b = 2; b <= Math.sqrt(a); b++) {
            if (a % b === 0) {
                if (b === a / b) {
                    count++;
                } else {
                    count += 2;
                }
            }
        }
        count <= limit ? (answer += count) : (answer += power);
    }
    return answer;
}