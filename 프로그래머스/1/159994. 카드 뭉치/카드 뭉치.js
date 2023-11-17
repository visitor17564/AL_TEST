function solution(cards1, cards2, goal) {
    let answer = "";
    let number = goal.length - 1;
    for (a = 0; a <= number; a++) {
        let cards = [cards1[0], cards2[0]];
        cards
        let findindex = cards.findIndex((index) => (index === goal[0]));
        if (findindex === 0) {
            cards1.splice(0, 1);
            goal.splice(0, 1);
        } else if (findindex === 1) {
            cards2.splice(0, 1);
            goal.splice(0, 1);
        } else {
            cards1.splice(0, 1);
            cards2.splice(0, 1);
        }
    }
    goal.length === 0 ? (answer = "Yes") : (answer = "No");
    return answer;
}