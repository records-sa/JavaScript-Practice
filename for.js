// for( 변수선언; 조건; 증감식 ) { 반복할 코드 }

for (let i = 0; i < 2; i++) {
  console.log(i);
}


// 회원님 잠시 따라와 주시죠

function solution(list) {
  const 동의서 = [];

  for(let i = 0; i < list.length ; i++) {
    if (list[i] === 0) {
      동의서.push("No");
    } else {
      동의서.push("Yes");
    }
  }

  return 동의서;
}

// 삼항 연산자로 쓰기
// for(let i = 0; i < list.length ; i++) {
//   list[i] === 0 ? 동의서.push("No") : 동의서.push("Yes");}
// return 동의서;

solution([1, 0, 0, 1]);


// 떼인 돈 받아드립니다

function solution(bill) {
  const 받을돈 = [];
  
  for(let i = 0; i < bill.length ; i++) {
    let 합계 = 0;
    for(let j = 0; j < bill.lenth[i]; j++) {
      합계 = 합계 + bill[i][j];
    }
    받을돈.push(합계);
  }
  return 받을돈;
}

solution([
  [1000, 500, 800],
  [600, 200, 200],
]); 