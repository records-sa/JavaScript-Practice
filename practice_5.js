// 부분 문자열
// 문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수 구하기

function solution(str1, str2) {
    return str2.includes(str1) ? 1 : 0;
}


// 조건에 맞게 수열 변환하기 3
// 정수 배열 arr와 자연수 k가 주어졌을 때, 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더한다.
// 이러한 변환을 마친 후의 arr를 return 하는 solution 함수 구하기

function solution(arr, k) {
  let result = [];
  for(let num of arr) {
      if (k % 2 === 1) {
          result.push(num * k); 
      } else {
          result.push(num + k);
      }
  }
  return result;
}

// 다른 풀이
const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)


// 삼각형의 완성조건 (1)
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수 구하기
// * 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 함

function solution(sides) {
  sides.sort((a, b) => a - b);
  return (sides[1] + sides[0] - sides[2]) > 0 ? 1 : 2;
}


// 최댓값 만들기 (1)
// 정수 배열 numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수 구하기

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}


// 순서쌍의 개수
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수 구하기
// * 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기

function solution(n) {
  const arr = [];
  for(i = 1; i <= n; i++) {
      if(n % i === 0) {
      arr.push(i);
      }
  }
  return arr.length;
}


// 아이스 아메리카노
// 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수 구하기
// * 아이스 아메리카노는 한잔에 5,500원

function solution(money) {
  let result = [];
  result.push(Math.floor(money / 5500));
  result.push(money % 5500);
  return result;
}