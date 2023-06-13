// 중앙값 구하기
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수 구하기
// * 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미함

function solution(array) {
  const array1 = array.sort((a, b) => a - b);
  const ind = Math.floor(array1.length / 2);
  return array1[ind];
}


// 배열 원소의 길이
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수 구하기

function solution(strlist) {
  let answer = [];
  for(i = 0; i < strlist.length; i++) {
      answer.push(strlist[i].length);
  }
  return answer;
}

// 다른 풀이
function solution(strlist) {
    return strlist.map((el) => el.length)
}

function solution(strlist) {
  var answer = [];
  strlist.forEach(el=>answer.push(el.length))
  return answer;
}


// 모음 제거
// 문자열 my_string이 매개변수로 주어질 때 모음(a, e, i, o, u)을 제거한 문자열을 return하도록 solution 함수 구하기

function solution(my_string) {
  let answer1 = my_string.replace(/a/g, '');
  let answer2 = answer1.replace(/e/g, '');
  let answer3 = answer2.replace(/i/g, '');
  let answer4 = answer3.replace(/o/g, '');
  let answer5 = answer4.replace(/u/g, '');
  return answer5;
}

// 다른 풀이
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

function solution(my_string) {
  return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}
// array.from(lbj[, mapFn, thisArg]) 을 사용하면 이터러블이나 유사 배열인 obj를 진짜 array로 만들 수 있음


// 배열 두 배 만들기
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수 구하기

function solution(numbers) {
  const result = [];
  for(let num of numbers) {
      result.push(num * 2);
  }
  return result;
}

// 다른 풀이
const solution = (numbers) => numbers.map((number) => number * 2)

