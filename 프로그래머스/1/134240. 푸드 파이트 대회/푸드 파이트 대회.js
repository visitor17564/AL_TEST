function solution(food) {
    let answer = "";
    answer += 0;
    for (a = food.length - 1; a >= 0; a--) {
        for (b = 1; b <= Math.floor(food[a] / 2); b++) {
            answer = a + answer;
            answer += a;
        }
    }
    return answer;
}
