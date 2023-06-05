// 우 to the 영 to the 우
// 거꾸로 해도 똑같은 단어를 찾기 위해 word가 주어질때 거꾸로해도 똑같은 단어인지 true, false로 출력하기

  // 내가 작성한 코드
function solution(word) {
  word.split('');
  if (word.lastIndexOf(word[0]) === 0) {
    return "true";
  } else {
    return "false";
  }
}

// 해설 코드
function solution(word) {
  const 뒤집은단어 = word.split("").reverse().join("");
  return 뒤집은단어 === word;
}
  
  solution("역삼역"); // true
  solution("고양이"); // false