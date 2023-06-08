// 짝수의 합
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수 구하기

function solution(n) {
    let sum = 0;

    for(let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}


// 배열의 평균값
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수 구하기

function solution(numbers) {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const avg = sum / numbers.length;
    return avg;
}

// 다른 풀이

function solution(numbers) {
    var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
    return answer;
}
// arr.reduce()는 배열을 기반으로 값 하나를 도출할 때 사용
// reduce를 이용해 코드 한 줄로 배열의 모든 요소를 더한 값을 구하는 방법
// let result = arr.reduce((sum, current) => sum + current, 0);


// 양꼬치
// 양꼬치는 1인분에 12,000원, 음료수는 2,000원이고, *10인분을 먹으면 음료수 하나 서비스
// 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수 구하기

function solution(n, k) {
  let service = Math.floor(n / 10);
  return (n * 12000) + ((k - service) * 2000);
}

// 다른 풀이

function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
}
// parseInt()는 숫자의 정수, parseFloat()는 부동 소수점 숫자를 반환함
// alert( parseInt('100px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5
// 위와 같이 숫자와 문자가 혼합되어 있을 때도 사용 가능


// 피자 나눠 먹기(1)
// 피자를 일곱 조각으로 잘라 줌 
// 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수 구하기

function solution(n) {
    return Math.ceil(n / 7);
}

// 다른 풀이

const solution = (n) => Math.ceil(n / 7);


// 중복된 숫자 개수
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수 구하기

function solution(array, n) {
  let count = array.filter(function(array) {
      return array === n;
  });
  return count.length;
}

// 다른 풀이

function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}

function solution(array, n) {
    return array.filter(v => v === n).length;
}