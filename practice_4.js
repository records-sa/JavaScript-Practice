// 배열의 유사도
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수 구하기

function solution(s1, s2) {
  let same = [];
  for(let char of s1) {
      for(let char2 of s2) {
          if (char === char2) {
              same.push(char);
          }
      }
  }
  return same.length;
}

// 다른 풀이

function solution(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}


// 배열 뒤집기
// 정수가 들어 있는 배열 num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수 구하기

function solution(num_list) {
  return num_list.reverse();
}

// 반복문으로 구하기

function solution(num_list) {
  let reverse = [];
  let index = num_list.length - 1
  for (i = 0; i < num_list.length; i++) {
    reverse.push(num_list[index - i]);
  }
  return reverse;
}


// 점의 위치 구하기
// 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수 구하기
// x 좌표와 y 좌표가 모두 양수이면 제1사분면 > 1 return
// x 좌표가 음수, y 좌표가 양수이면 제2사분면 > 2 return
// x 좌표와 y 좌표가 모두 음수이면 제3사분면 > 3 return
// x 좌표가 양수, y 좌표가 음수이면 제4사분면 > 4 return

function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) {
      return 1;
  } else if (dot[0] < 0 && dot[1] > 0) {
      return 2;
  } else if (dot[0] < 0 && dot[1] < 0) {
      return 3;
  } else {
      return 4;
  }
}


// 문자열 뒤집기
// 문자열 my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수 구하기

function solution(my_string) {
  let string = [];
  let index = my_string.length - 1;
  for (i = 0; i < my_string.length; i++) {
      string.push(my_string[index - i]);
  }
  return string.join('');
}

// 다른 풀이

function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}
