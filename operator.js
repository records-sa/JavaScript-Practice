// 막내야 도넛 좀 사와라

function solution(n, donuts) {
  const 박스수 = n / donuts;
  return solution;
}

solution(120, 12);
solution(40, 8);


// 운수 좋은 날

function solution(n, members) {
  const 내돈 = n + 6000;
  const 남은돈 = 내돈 - (members * 4100);
  return 남은돈;
}

solution(50000, 12);
solution(35000, 9);


// 이런 건 맨날 나만 시키지

function solution(name, birth) {
  return name + birth;
}

solution("marco", 970219);
solution("tomas", 991108);


// 비밀번호 만들기

function solution(birth, date) {
  const pw = birth + date;    //number + number를 하면 계산되는 것이 아닌지?? 문자로 바꿔줘야 하지 않나?
  return "비밀번호는 " + pw + "입니다.";
  `비밀번호는 ${pw}입니다.`;  // 템플릿 리터럴로 문자와 숫자를 혼합해서 작성 가능, 변수 안에 계산식도 사용 가능
}

solution(900501, 2021);
solution(930219, 2020);

