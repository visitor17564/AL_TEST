function solution(park, routes) {
  let answer = [];
  // 시작지점을 일단 찾으셈
  let nowX = 0;
  let nowY = 0;
  for (a = 0; a < park.length; a++) {
    if (park[a].indexOf("S") === -1) {
      nowY += 1;
    } else {
      nowX = park[a].indexOf("S");
      break;
    }
  }
  // 장애물위치는 parkIndex값으로 대충 해결가능
  // 전체크기 확인
  let H = park.length - 1;
  let W = park[0].length - 1;
  // 이동명령 수행
  for (a = 0; a < routes.length; a++) {
    let way = routes[a].split(" ")[0];
    let amount = Number(routes[a].split(" ")[1]);
    // 넘치지 않는 E일 때
    if (way === "E" && nowX + amount <= W) {
      // 장애물 위치랑 겹치면 무시
      let countObstacle = 0;
      for (b = 1; b <= amount; b++) {
        if (park[nowY][nowX + b] === "X") {
          countObstacle += 1;
        }
      }
      if (countObstacle === 0) {
        nowX += amount;
        continue;
      }
    }
    // 넘치지 않는 W일때
    if (way === "W" && nowX - amount >= 0) {
      // 장애물 위치랑 겹치면 무시
      let countObstacle = 0;
      for (b = 1; b <= amount; b++) {
        if (park[nowY][nowX - b] === "X") {
          countObstacle += 1;
        }
      }
      if (countObstacle === 0) {
        nowX -= amount;
        continue;
      }
    }
    // 넘치지 않는 S일때
    if (way === "S" && nowY + amount <= H) {
      // 장애물 위치랑 겹치면 무시
      let countObstacle = 0;
      for (b = 1; b <= amount; b++) {
        if (park[nowY + b][nowX] === "X") {
          countObstacle += 1;
        }
      }
      if (countObstacle === 0) {
        nowY += amount;
        continue;
      }
    }
    // 넘치지 않는 N일때
    if (way === "N" && nowY - amount >= 0) {
      // 장애물 위치랑 겹치면 무시
      let countObstacle = 0;
      for (b = 1; b <= amount; b++) {
        if (park[nowY - b][nowX] === "X") {
          countObstacle += 1;
        }
      }
      if (countObstacle === 0) {
        nowY -= amount;
        continue;
      }
    }
  }
  answer.push(nowY);
  answer.push(nowX);
  return answer;
}