// 계산기가 이상해

function solution(num1, num2) {
  return typeof num1 + " " + typeof num2;    // typeof()로 사용해도 됨
}

solution("9", "10");
solution(19, 1);
solution("2", "14");


// 덧셈 계산기

function solution(num1, num2) {
  return Number(num1) + Number(num2);
}

solution("1", 2);
solution(5, 6);
solution("3", "5");


// 경마장 용지
function solution(input) {
  return Number(input);
}

solution(1);
solution("2");