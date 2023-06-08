// 나머지 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하는 solution 함수 구하기

function solution(num1, num2) {
    let remainder = num1 % num2;
    return remainder;
}


// 몫 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수 구하기

const solution = (num1, num2) => Math.floor(num1 / num2);


// 두 수의 차
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수 구하기

const solution = (num1, num2) => num1 - num2;


// 나이 출력
// 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수 구하기
// **나이는 태어난 연도에 1살이며 1년마다 1씩 증가

function solution(age) {
  return (2022 - age) + 1;
}


// 숫자 비교하기
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수 구하기

function solution(num1, num2) {
  return (num1 === num2 ? 1 : -1);
}


// 두 수의 나눗셈
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수 구하기

function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// 다른 풀이
function solution(num1, num2) {
    return Math.trunc(num1 / num2 * 1000);
}
// Math.trunc()는 소수점 이하 수를 모두 버리는 메서드
// Math.floor()는 소수점을 내림하는 메서드
// ex) Math.floor(23.3) = 23, Math.floor(-23.3) = -24
// 음수일 경우를 생각해서 소수점 이하 수를 없애고 싶을 때는 Math.trunc()가 좋음
// 하지만 Internet Explorer에서는 지원하지 않음


// 각도기
//  angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성하기
// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

function solution(angle) {
  if(angle < 90) {
      return 1;
  } else if (angle === 90) {
      return 2;
  } else if (angle > 90, angle < 180) {    // 90 < angle < 180 이거 안됨
      return 3;
  } else {
      return 4;
  }
}

// 다른 풀이
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

function solution(angle) {
  return [0, 90, 91, 180].filter(x => angle>=x).length;
}