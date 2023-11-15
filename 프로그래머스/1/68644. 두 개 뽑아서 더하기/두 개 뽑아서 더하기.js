function solution(numbers) {
    let answer = [];
    for (a = 0; a <= numbers.length - 2; a++) {
        for (b = a + 1; b <= numbers.length-1; b++) {
            answer.push(numbers[a] + numbers[b]);
        }
    }
    let set = new Set(answer.sort((a,b) => a-b))
    return [...set];
}