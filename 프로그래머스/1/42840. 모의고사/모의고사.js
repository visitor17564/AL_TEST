function solution(answers) {
    let answer = [];
    let number1 = [1, 2, 3, 4, 5];
    let number2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let number3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let record1 = 0;
    let record2 = 0;
    let record3 = 0;
    for (a = 0; a <= answers.length - 1; a++) {
        if (answers[a] === number1[a % 5]) {
            record1 += 1;
        }
        if (answers[a] === number2[a % 8]) {
            record2 += 1;
        }
        if (answers[a] === number3[a % 10]) {
            record3 += 1;
        }
    }
    const conclusion = [
        { name: 1, score: record1 },
        { name: 2, score: record2 },
        { name: 3, score: record3 },
    ];
    const rank = conclusion.sort((a, b) => b.score - a.score);
    let answer2 = rank.filter((name) => name.score === rank[0].score);
    answer2.forEach((name) => {
        answer.push(name.name);
    });
    return answer
}