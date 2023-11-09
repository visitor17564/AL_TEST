function solution(n, lost, reserve) {
    let reserve2 = [];
    for (let value of reserve) {
        reserve2.push(value);
    }
    for (a = 0; a <= lost.length - 1; a++) {
        if(reserve2.indexOf(lost[a])!==-1) {
            reserve2.splice(reserve2.indexOf(lost[a]),1);
            lost.splice(a,1)
        }
    }
    for (a = 0; a <= lost.length - 1; a++) {
        if(reserve2.indexOf(lost[a]-1)!==-1) {
            reserve2.splice(reserve.indexOf(lost[a])-1,1);
            lost.splice(a,1)
        }
    }
    for (a = 0; a <= lost.length - 1; a++) {
        if(reserve2.indexOf(lost[a]+1)!==-1) {
            reserve2.splice(reserve.indexOf(lost[a])+1,1);
            lost.splice(a,1)
        }
    }
    return n-lost.length
}