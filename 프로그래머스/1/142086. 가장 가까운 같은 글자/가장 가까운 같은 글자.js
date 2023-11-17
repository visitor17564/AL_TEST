function solution(s) {
    let answer = [];
    let arr = s.split("");
    // 한바퀴 돌면서 indexOf이 -1이면 answer에 추가
    // -1이 아니면 첫 값은 -1
    // 두번째 값은 그 앞에 index와의 거리
    // 세번째 값은 두번째 index와의 거리
    for (a = s.length - 1; a >= 0; a--) {
        let b = s[a];
        arr.pop()
        if(arr.indexOf(b)===-1){
            answer.unshift(-1)
        } else {
            var indices = [];
            var array = arr;
            var element = s[a];
            var idx = array.indexOf(element);
            while (idx != -1) {
                indices.push(idx);
                idx = array.indexOf(element, idx + 1);
        }
        answer.unshift(a-indices[indices.length-1])
        }
    }
    console.log(answer);
    return answer;
}