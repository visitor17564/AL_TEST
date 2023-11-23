function solution(n, m, section) {
    let answer = 0;
    while (section.length !== 0) {
    let num = 0;
    let count = 0;
    num = section[0];
    for (a = 0; a <= m - 1; a++) {
        let test = section.findIndex((ele) => ele === num + a);
        if (test === 0) {
            section.splice(0, 1);
            count++;
            continue;
        }
    }
    if (count > 0) {
        answer++;
        count = 0;
    }
    }
    answer;
    return answer;
}