// 옹알이 (1)
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못함
// 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수 구하기
// * babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장
// * 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장

function solution(babbling) {
  let answer = 0;
  let baby = ["aya", "ye", "woo", "ma" ];
  function check(word) { 
      word = word.replace(baby[0], "%");
      word = word.replace(baby[1], "%");
      word = word.replace(baby[2], "%");
      word = word.replace(baby[3], "%");
      word = word.replaceAll("%","");
      if(word === "") {
          answer++;
          return;
      }
      return;
  }
  for (let i = 0; i < babbling.length; i++) {
      check(babbling[i]);
  }
  return answer;
}
