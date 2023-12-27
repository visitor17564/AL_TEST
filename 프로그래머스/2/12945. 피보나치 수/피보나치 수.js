function solution(n) {
  let answer = 0;
  let map = new Map()
  map.set(`F(0)`, 0)
  map.set(`F(1)`, 1)
  for(a=2;a<=n;a++){
    if(map.get(`F(${a})`) === undefined){
      map.set(`F(${a})`, map.get(`F(${a-1})`)%1234567 + map.get(`F(${a-2})`)%1234567)
    }
  }
  answer = map.get(`F(${n})`)%1234567
  return answer;
}
