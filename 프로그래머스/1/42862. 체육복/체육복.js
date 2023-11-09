function solution(n, lost, reserve) {
    // 여벌 옷 생성
    lost.sort();
    reserve.sort();
    let reserve2 = [];
    for (let value of reserve) {
        reserve2.push(value);
    }
    // reserve2에서 lost 중복차감
    for (a = lost.length - 1; a >= 0; a--) {
        if (reserve2.indexOf(lost[a]) !== -1) {
            reserve2.splice(reserve2.indexOf(lost[a]), 1);
            lost.splice(a, 1);
        }
    }
    // +-1 중 하나만 있는 애들부터 처리해주기
    for (a = lost.length - 1; a >= 0; a--) {
        const findPlusSizeIndex = reserve2.indexOf(lost[a] + 1);
        const findMinusSizeIndex = reserve2.indexOf(lost[a] - 1);
        if (findPlusSizeIndex !== -1 && findMinusSizeIndex !== -1) {
            continue;
        } else if(findPlusSizeIndex !== -1){
            reserve2.splice(findPlusSizeIndex, 1);
            lost.splice(a, 1);
        } else if(findMinusSizeIndex !== -1){
            reserve2.splice(findMinusSizeIndex, 1);
            lost.splice(a, 1);
        }
    }
    // reserve2에서 lost+1값 먼저차감
    for (a = lost.length - 1; a >= 0; a--) {
        const findPlusSizeIndex = reserve2.indexOf(lost[a] + 1);
        if (findPlusSizeIndex !== -1) {
            reserve2.splice(findPlusSizeIndex, 1);
            lost.splice(a, 1);
        }
    }
    // reserve2에서 lost-1값 후차감
    for (a = lost.length - 1; a >= 0; a--) {
        const findMinusSizeIndex = reserve2.indexOf(lost[a] - 1);
        if (findMinusSizeIndex !== -1) {
            reserve2.splice(findMinusSizeIndex, 1);
            lost.splice(a, 1);
        }
    }
    return n - lost.length;
}