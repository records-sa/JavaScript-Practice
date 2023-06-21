// 숨어있는 숫자의 덧셈 (1)
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수 구하기
// * my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있음

function solution(my_string) {
  let answer = [];
  let number = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9'
  for (let i = 0; i < my_string.length; i++) {
      for (let j = 0; j < number.length; j++) {
          if (my_string[i] === number[j]) {
              answer.push(my_string[i]);
          }
      }
  }
  return result = answer.reduce((sum, current) => +sum + +current, 0);
}

// 다른 풀이
function solution(my_string) {
  let sum = 0;
  for (const ch of my_string) {
      if (!isNaN(ch)) sum += +ch;
  }
  return sum;
}
// isNaN(value)- 인수를 숫자로 변환한 다음, 숫자가 아니면 NaN(에러)이므로 true
// 따라서 !isNaN(value)은 숫자이면 true