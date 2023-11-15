function solution(array, commands) {
    var answer = [];
    for (a = 0; a <= commands.length - 1; a++) {
        answer.push(
            array.slice(commands[a][0] - 1, commands[a][1]).sort((a,b) => a-b)[
                commands[a][2] - 1
            ]
        );
    }
    return answer;
}