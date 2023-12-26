function solution(s) {
  let answer = '';
  let arr = s.toLowerCase().split(" ");
  arr
  for(i=0; i<arr.length; i++){
    console.log(arr[i]==="")
    if(arr[i]===""){
      answer+= " "
      continue;
    }
    if(!isNaN(arr[i][0])) {
      if(i===0){
        answer+=arr[i]
      } else {
        answer+=` ${arr[i]}`
      }
    } else {
      if(i===0){
        answer+=arr[i][0].toUpperCase()+arr[i].slice(1)
      } else {
        answer+=" " + arr[i][0].toUpperCase() + arr[i].slice(1);
      }
    }
  }
  answer
  return answer;
}
