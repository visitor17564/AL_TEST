function solution(a, b) {
    let answer = "";
    let date = new Date(`${a} ${b}, 2016`);
    answer = Intl.DateTimeFormat("en-US", { weekday: "long" })
        .format(date)
        .slice(0, 3)
        .toUpperCase();
    return answer;
}