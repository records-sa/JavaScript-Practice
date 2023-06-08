// 편지
// 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수 구하기
// * message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있음

function solution(message) {
    let str = [];
    for (i = 0; i < message.length; i++) {
        str.push(message[i]);
    }
    return str.length * 2;
}

// 다른 풀이

function solution(message) {
    return message.length*2;
}
// 배열에 담지 않고 문자열의 길이에 * 2 해도 됨


// 피자 나눠 먹기(3)
// 피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수 구하기

function solution(slice, n) {
  return Math.ceil(n / slice);
}


// 짝수 홀수 개수
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수

function solution(num_list) {
    let result = [];

    let even = num_list.filter((num) => num % 2 === 0)
    result.push(even.length);    
    let odd = num_list.filter((num) => num % 2 === 1)
    result.push(odd.length);

    return result;
}


// 옷가게 할인 받기
// 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수 구하기

function solution(price) {
  if(price >= 100000 && price < 300000) {
      return Math.floor(price * 0.95);
  } else if(price >= 300000 && price < 500000) {
      return Math.floor(price * 0.9);
  } else if(price >= 500000) {
      return Math.floor(price * 0.8);
  } else {
      return price;
  }
}


// 배열 자르기
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수 구하기

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num1 + (num2 - num1) + 1);
}
// 처음에 numbers.slice(num1, num1 + num2); 이렇게 풀었는데 테스트 케이스는 통과했는데 제출하니까 실패해서 어디서 틀린지 찾아내는데 한참 걸렸다.
// arr.slice(시작 인덱스, 끝 인덱스 -1)!


// 다른 풀이
function solution(numbers, num1, num2) {
  var answer = [];

  for (let i = num1; i < num2+1; i++) {
      answer.push(numbers[i])
  }

  return answer;
}


// 특정 문자 제거하기
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수 구하기

function solution(my_string, letter) {
  return my_string.split(letter).join('');
}
