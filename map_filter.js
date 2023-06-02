// 배열과 반복문을 함께 써야 할 때

// 배열.map( 함수 );
// 새로운 배열을 만들어야 할 때, 리스트에 반복하는 작업을 수행해야 할 때 사용

const week = ["월", "화", "수", "목", "금"];
const 결과 = week.map((요일) => " " + 요일);
// 결과: [" 월", " 화", " 수", " 목", " 금"]
// 원본 배열 week는 그대로 유지, 결과 배열을 새로 생성


// 배열.filter( 함수 );
// 조건에 맞는 요소로 리스트를 새로 생성할 때 사용

const numList = [1, 2, 3, 4, 5];
const 출력 = numList.filter((num) => num % 2 === 0);
// 출력: [2, 4]
// 원본 배열 numList는 그대로 유지, 결과 배열을 새로 생성



// 가족같은 회사님의 초대에 수락하시겠습니까?
// 초대자 명단 numList 배열의 각 초대자 이름 뒤에 "님"을 추가한 배열 생성하기

// 내가 푼 코드
function solution(nameList) {
  const 메일_명단 = nameList.map((이름) => 이름 + "님");
  return 메일_명단
}

// 해설 코드
function solution(nameList) {
  return nameList.map((이름) => `%{이름}님`);
}

solution(["병건", "호민", "풍"]);


// 그건 제 잔상입니다만?
// 네트워크망에 접속한 회사 IP 주소가 담긴 배열 userList, 접속 가능한 회사 IP 주소 ip가 주어졌을 때, 허용되지 않는 IP 주소로 접속한 회원의 IP 주소를 나열한 배열 생성하기

function solution(userList, ip) {
  const 접속불가 = userList.filter((접속자) => 접속자 !== ip);
  if (접속불가 > 0){    // 같지 않은 배열을 리턴하므로 if문은 굳이 필요하지 않음
    return 접속불가;
  } else{
    return userList;
  }
}
  
  solution(
    ["123.123.02", "123.123.02", "432.223.07", "123.173.08"],
    "123.123.02"
  );
  solution(
    ["228.093.22", "228.093.22", "228.093.22"], 
    "228.093.22"
  );


// 삑 그리고 다음
// 바코드 숫자가 담긴 배열에서 0을 배열의 끝으로, 나머지는 순서를 유지한 배열 구하기

function solution(barcode){
  const zero = barcode.filter((영) => 영 === 0);
  const number = barcode.filter((영) => 영 !== 0);
  return [...number, ...zero];
  }
  
  solution([8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5]);
  // [8, 8, 1, 2, 3, 4, 5, 6, 1, 5, 0, 0, 0]
  solution([0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1]);
  // [7, 6, 4, 6, 9, 2, 5, 1, 0, 0, 0, 0, 0]


// 선배~ 밥 사주세요~!
// 선배 개발자의 위치가 1로 표시된 2차원 배열 map에서 선배 개발자가 위치한 방의 숫자와 몇 번 자리에 있는지를 찾아 ”선배님은 x번 방, y번 자리에 있습니다.” 라는 문구를 return 하기
// 만약, 선배 개발자의 위치를 찾지 못한 경우에는 ”선배님을 찾을 수가 없습니다.” 라는 문구 return

// 내가 푼 코드
function solution(map){
  const x = map.indexOf(1);
  const y = map.indexOf(x);
  if ( x !== -1 ) {
    return "선배님은 (x + 1)번 방, (y + 1)번째 자리에 있습니다.";
  } else {
    return "선배님을 찾을 수가 없습니다.";
  }
}

// 해설 코드
function solution(map){
  for (let 방 = 0; 방 < map.length; 방++) {
    for (let 자리 = 0; 자리 < map[방].length; 자리++) {
      if (map[방][자리]) {
        return `선배님은 ${방 + 1}번 방, ${자리 + 1}번째 자리에 있습니다.`;        
      }
    }
  }
  return "선배님을 찾을 수가 없습니다.";
}

  solution([[0, 0], [0], [0, 1, 0], [0, 0]]);
  // “선배님은 3번째 방, 2번 자리에 있습니다.”
  solution([[0], [0, 0], [0], [0, 0], [0, 0]]);
  // “선배님을 찾을 수가 없습니다.”