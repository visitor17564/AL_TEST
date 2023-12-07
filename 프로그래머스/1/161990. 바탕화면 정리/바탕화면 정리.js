function solution(wallpaper) {
  var answer = [];
  let lux = 0;
  // 가장 작은 사각형을 만든다
  // 시작점의 lux는 가장 첫번째로 #이 나오는 줄의 -1인덱스임
  for (a = 0; a < wallpaper.length; a++) {
    if (wallpaper[a].indexOf("#") === -1) {
      continue;
    } else {
      lux += a;
      break;
    }
  }
  answer.push(lux);
  // luy는 애들 다 뒤져서 젤 작게나오는 #의 인덱스임
  let luy = -1;
  for (a = 0; a < wallpaper.length; a++) {
    if (wallpaper[a].indexOf("#") === -1) {
      continue;
    } else if (luy === -1) {
      luy = wallpaper[a].indexOf("#");
    }
    if (wallpaper[a].indexOf("#") < luy) {
      luy = wallpaper[a].indexOf("#");
    } else continue;
  }
  answer.push(luy);
  // rdx는 가장 마지막으로 #이 나오는 줄의 인덱스임
  let rdx = 0;
  for (a = 0; a < wallpaper.length; a++) {
    if (wallpaper[a].indexOf("#") === -1) {
      continue;
    } else {
      rdx = a + 1;
    }
  }
  answer.push(rdx);
  // rdy는 애들 다 뒤져서 젤 크게나오는 #의 +1 인덱스임
  let rdy = 0;
  for (a = 0; a < wallpaper.length; a++) {
    if (wallpaper[a].lastIndexOf("#") === -1) {
      continue;
    } else if (rdy === 0) {
      rdy = wallpaper[a].lastIndexOf("#") + 1;
    }
    if (wallpaper[a].lastIndexOf("#") + 1 > rdy) {
      rdy = wallpaper[a].lastIndexOf("#") + 1;
    } else continue;
  }
  answer.push(rdy);
  return answer;
}