function solution(sizes) {
    let answer = 0;
    let w = [];
    let h = [];
    for (e = 0; e <= sizes.length - 1; e++) {
        w.push(sizes[e].sort((a,b) => a-b)[0]);
        h.push(sizes[e].sort((a,b) => a-b)[1]);
    }
    answer = w.sort((a,b) => a-b).reverse()[0] * h.sort((a,b) => a-b).reverse()[0];
    return answer;
}