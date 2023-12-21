function solution(id_list, report, k) {
  // 같은이용자의 같은신고는 1개만처리
  let uniqueReport = [...new Set(report)];
  // 신고당한 이용자별 메일링별 카운트용 객체 생성
  let mailedCount = new Object
  let suedId = new Object
  for(a=0;a<id_list.length;a++) {
    suedId[id_list[a]]=0
    mailedCount[id_list[a]]=0
  }
  // k랑 비교해서 탈퇴처리될 애들을 센다.
  for(a=0;a<uniqueReport.length;a++) {
    suedId[uniqueReport[a].split(' ')[1]] += 1
  }

  let stoppedId = new Map
  // 탈퇴처리될 애들을 신고한 녀석들에게 메일카운트  
  for(a=0;a<id_list.length;a++) {
    if(suedId[id_list[a]]>=k){
      stoppedId.set(id_list[a], true)
    }
  }

  // 사람별 메일카운트를 반환
  for(a=0;a<uniqueReport.length;a++) {
    if(stoppedId.get(uniqueReport[a].split(' ')[1])){
      mailedCount[uniqueReport[a].split(' ')[0]] += 1
    }
  }

  let answer = Object.values(mailedCount)
  return answer;
}