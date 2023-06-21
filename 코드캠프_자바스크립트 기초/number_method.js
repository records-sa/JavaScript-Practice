// 이번 달 신작이 나왔잖아?
// 상여금 money 로 57,000원인 피규어를 몇개 구매할 수 있는지?

function solution(money) {
  return Math.floor(money / 57000);    // 소수점 이하 숫자 내림 처리
}

solution(230000);
solution(769000);


// 이거 하나 드실래요?
// 한 팩당 5개가 들어있는 호빵을 n명의 사무실 직원들과 나누어 먹기 위해 몇 팩을 구매해야 하는지?

function solution(n) {
  return Math.ceil(n / 5);    // 소수점 이하 숫자 올림 처리
}

solution(23);
solution(76);


// 공구 문의는 DM으로 부탁드릴게요
// prices 배열에 담긴 키보드 가격 중 가장 저렴한 가격을 찾기

function solution(prices) {
  return Math.min(...prices);   // 배열은 인식을 못하므로 spread 메서드 사용
  // Math.max() 는 최대값 구하는 함수
}

solution([2000, 113000, 67000, 40500, 99000]);


// 이달의 우수사원!
// vote 배열에 직원 득표수가 순서대로 담겨 있을 때, 가장 많은 표를 받은 직원의 사원 번호 구하기

function solution(vote) {
  const 일등 = Math.max(...vote);
  const 일등_찾기 = vote.indexOf(일등);
  return 일등_찾기 + 1;
}

solution([5, 2, 0, 1, 0]);
solution([0, 0, 1, 7, 0, 4, 2]);
