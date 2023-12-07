function solution(today, terms, privacies) {
  let answer = [];
  let todayDate = new Date(today.split("."));
  let newTerms = [];
  // 약관별 계산, 객체화
  for (a = 0; a < terms.length; a++) {
    newTerms.push(terms[a].split(" "));
  }
  let termObj = Object.fromEntries(newTerms);
  // 각 privacies별로 만료일 계산
  for (a = 0; a < privacies.length; a++) {
    // 유효기간 식별
    let termWord = privacies[a].split(" ")[1];
    // 수집일자 확인
    let getInfoDay = new Date(privacies[a].split(" ")[0]);
    // 만료일자 확인
    let expiredDay = new Date(
      getInfoDay.setMonth(getInfoDay.getMonth() + Number(termObj[termWord]))
    );
    // 비교후 만료시 기입
    expiredDay - todayDate <= 0 ? answer.push(a + 1) : "";
  }
  return answer;
}