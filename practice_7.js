// 문자 반복 출력하기
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수 구하기

function solution(my_string, n) {
  let result = '';
  for (let i = 0; i < my_string.length; i++) {
      for (let j = 0; j < n; j++) {
          result += my_string[i];
      }
  }
  return result;
}

// 다른 풀이
function solution(my_string, n) {
  var answer = [...my_string].map(v => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}


// 문자열안에 문자열
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수 구하기

function solution(str1, str2) {
  let result = str1.includes(str2);
  return result === true ? 1 : 2;
}


// 문자열의 뒤의 n글자
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수 구하기

function solution(my_string, n) {
  let result = '';
  let ind = my_string.length - n;
  for (let i = 0; i < n; i++) {
      result += my_string[ind + i];
  }
  return result;
}

// 다른 풀이
function solution(my_string, n) {
  return my_string.substring(my_string.length - n);
}


// 짝수는 싫어요
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수 구히기

function solution(n) {
  let result = [];
  for (i = 0; i <= n; i++) {
      if (i % 2 === 1) {
          result.push(i);
      } else {
          continue;
      }
  }
  return result;
}


// 자릿수 더하기
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수 구하기

function solution(n) {
  return n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
}

// 다른 풀이
function solution(n) {
  let answer = 0;
  let a = n + '';
  for (let i = 0; i < a.length; i++) {
      answer += Number(a[i]);
  }
  return answer;
}