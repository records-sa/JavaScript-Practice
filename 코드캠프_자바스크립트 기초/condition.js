// 새해 복 많이 받으세요

function solution(name) {
  return name === "나사장" ? "code100" : "code50";
}

solution("나사장");
solution("나임원");


// 원두는 착한 어른이

function solution(age) {
  if(age <= 3){return "분유 스틱";}    // 조건에 0 보다 크다는 내용이 있음
  else if(age <= 7){return "초콜릿과 사탕";}    // if문을 거치기 때문에 굳이 4보다 크다는 안적어도 됨
  else{return "쿠키";}
}

solution(7);
solution(2);
solution(19);


// 내 휴가는 너무 소중해

function solution(year) {
  if(year === 3){return 5;}
  else if(year === 5){return 12;}
  else if(year === 10){return 30;}
  else{return 0;}
}

solution(3);
solution(4);
solution(5);
solution(10);