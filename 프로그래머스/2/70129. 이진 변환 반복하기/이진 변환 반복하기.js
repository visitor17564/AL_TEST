function solution(s) {
    let answer = [];
    let count = 0
    let deletedZero = 0
    let next = s
    while(next.length!==1){
        count++
        if(next.indexOf("0")===-1){
            next = next.split("0").join("").length.toString(2)
        } else {
            deletedZero += next.match(/0/g).length
            next = next.split("0").join("").length.toString(2)
        }
    }
    answer.push(count)
    answer.push(deletedZero)
    return answer;
}