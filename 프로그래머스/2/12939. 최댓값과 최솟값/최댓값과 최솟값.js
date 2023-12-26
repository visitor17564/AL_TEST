function solution(s) {
    let answer = '';
    // 일단 숫자를 배열로 반환?
    let arr = s.split(' ').sort((a,b) => (Number(a)-Number(b)))
    answer += `${arr[0]} ${arr[arr.length-1]}`
    return answer;
}
