function solution(keymap, targets) {
  let answer = [];
  for (a = 0; a <= targets.length - 1; a++) {
    // 각 타겟별 단어 순환
    // 1. 순환이 끝나고 한글자라도 작성할 수 없으면 전체 result에 -1이 들어가야함
    // 1-1. length 체크를 위한 ARRAY 생성
    let lengthCheckArr = [];
    for (b = 0; b <= targets[a].length - 1; b++) {
      // 1-1. 한글자라도 체크를 위한 Array 생성
      let textCheckArr = [];
      // 타겟별 한글자씩 순환
      for (c = 0; c <= keymap.length - 1; c++) {
        // 한글자별 키맵 순환
        // length 체크를 위한 -1 삭제
        let findText = keymap[c].indexOf(targets[a][b]);
        if (findText === -1) continue;
        textCheckArr.push(findText + 1);
      }
      textCheckArr;
      // textCheckArr.length === 0이면, lengthCheckArr에 -1삽입, 아니면 둘중 작은 수 삽입
      if (textCheckArr.length === 0) {
        lengthCheckArr.push(-1);
      } else {
        lengthCheckArr.push(textCheckArr.sort((a, b) => a - b)[0]);
      }
    }
    // lengthCheckArr에 -1값이 있으면 answer에 -1 삽입, 아니면 모든 수를 합쳐서 삽입
    if (lengthCheckArr.findIndex((value) => value === -1) !== -1) {
      answer.push(-1);
    } else {
      let sum = 0;
      lengthCheckArr.forEach((value) => {
        sum += value;
      });
      answer.push(sum);
    }
  }
  return answer;
}