function solution(babbling) {
    let answer = 0;
    let count = 0;
    for (a = 0; a <= babbling.length - 1; a++) {
        if (
            babbling[a].indexOf("ayaaya") !== -1 ||
            babbling[a].indexOf("yeye") !== -1 ||
            babbling[a].indexOf("woowoo") !== -1 ||
            babbling[a].indexOf("mama") !== -1
        ) {
            continue;
        }
        let splitWord = babbling[a]
            .replace(/aya/gi, 1)
            .replace(/ye/gi, 1)
            .replace(/woo/gi, 1)
            .replace(/ma/gi, 1);
        if (!isNaN(Number(splitWord))) {
            answer++;
        }
    }
    return answer;
}