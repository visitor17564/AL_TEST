function solution(number) {
    let answer = 0;
    let count = 0;
    for (a = 0; a <= number.length - 1; a++) {
        for (b = a + 1; b <= number.length - 1; b++) {
            for (c = b + 1; c <= number.length - 1; c++) {
                if (number[a] + number[b] + number[c] === 0) {
                    answer += 1;
                } else "";
            }
        }
    }
    return answer;
}