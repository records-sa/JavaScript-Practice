// while - true일 동안 계속 실행하는 반복문
// while( 조건 ){ 명령문 };

// while 명령문 안에서 continue가 있을 경우 명령문의 실행을 종료하고 다음 반복을 실행

let 나이 = 16;
while (나이 < 20) {
  나이 = 나이 + 1;
  if(나이 === 19) continue;    // 19일 때만 출력되지 않고 반복문은 계속 실행됨
  console.log(나이, "입장 불가");
}
console.log("끝~!");

// while 문을 종료하려면 break를 사용
let age = 16;
while (age < 20) {
  age = age + 1;
  if(age === 19) break;    // 19일 때, while 문이 종료됨
  console.log(age, "입장 불가");
}
console.log("끝~!");



// 몇 분이세요?
// 내가 작성한 코드
function solution(list, limit, reports) {
  const 현재수 = Math.sum(...list);    // 현재 예약자수 계산
  const 자리 = limit - 현재수;    // 예약 가능한 자리 확인
  const 가능여부 = 자리 - reports;    // 예약 신청 받을 수 있는지 확인
  
  while (가능여부 >= 0) {
    console.log("true");    // boolean 타입으로 return
  }
  console.log("false");
}

// 해설 코드
function solution(list, limit, reports) {
  let 예약자수 = 0;
  let 인덱스 = 0;
  
  while ( 인덱스 < list.length) {
    예약자수 = 예약자수 + list[인덱스]; 
    인덱스 = 인덱스 + 1;
  }
  return 예약자수 + reports <= limit;
}

solution([1, 5, 4, 3], 15, 3);
solution([1, 1, 1, 2], 7, 2);