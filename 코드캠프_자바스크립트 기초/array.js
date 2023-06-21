// 배열에 요소 추가/ 제거하기
// arr.push(5);  맨 뒤에 요소 추가
// arr.pop();  맨 뒤 요소 제거
// arr.unshift(5);  맨 앞에 요소 추가
// arr.shift();  맨 앞 요소 제거


// 오점뭐

function solution(menuList, today) {
  if(menuList.includes(today)){    // 이미 메뉴가 존재한다면 추가하지 않고 메뉴 리스트를 출력
    return menuList;
  }
  if(menuList.length > 10){    // 메뉴 목록의 길이가 10을 초과하면 메뉴를 추가하지 않고 리스트를 출력
    return menuList;
  }
  menuList.push(today);    // 메뉴 리스트는 배열로 주어졌으므로 따로 선언할 필요 없음
  return menuList;
}

solution(["돈까스", "마라샹궈"], "마라탕");


// 프로젝트 명세서

function solution(stacks) {
  stacks.sort();    // 배열을 정렬해주는 메서드
  stacks.reverse();    // 배열 순서를 반전 시켜주는 메서드
  return stacks;    // return stacks.sort().reverse();
}

solution(["typescript", "express", "node", "react"]);


// 좋은 질문? 지적? 아무튼 감사합니다~

// 내가 처음 작성한 코드
function solution(prev, join) {
  prev.push(prev[0]);
  prev.unshift(join);
  return prev;
}

// 강의 풀이 코드
function solution(prev, join) {
  const 지난번에_처음발표자 = prev.shift();
  return [join, ...prev, 지난번에_처음발표자];   // ... 배열 안의 요소들을 꺼내주는 spread
}

solution(["sudo", "임금"], "라떼");
solution(["아버", "광어", "안드로이드", "siri"], "피카츄");



// 배열 자르기
// arr.splice(시작인덱스, 개수);  시작인덱스부터 개수만큼 잘라내기
// const 자른거 = arr.splice(1, 2);  잘라낸 배열 출력하기
// arr.slice(시작인덱스, 끝인덱스);  시작인덱스부터 끝인덱스 전까지 자르기
// const 자른거 = arr.slice(1, 3);  원본 배열은 그대로 있고 복사본으로 출력하므로 변수에 담아서 출력해야 함


// 벌레 퇴치

// 내가 푼 코드
function solution(feature) {
  const 버그 = feature.indexOf("bug");
  return 버그 === -1 ? feature : splice(버그, 1);
}

// 강의 풀이 코드(splice)
function solution(feature) {
  버그 = feature.indexOf("bug");    // 버그 위치 찾기
  if(버그 === -1) {    // 버그가 없다면 기존 배열 그대로 출력
    return feature;
  }

  feature.splice(버그, 1);    // 버그를 제거한 배열 출력
  return feature;
}

// 강의 풀이 코드(slice)
function solution(feature) {
  버그 = feature.indexOf("bug");
  if(버그 === -1) {
    return feature;
  }

  const arr1 = feature.slice(0, 버그);    // 버그 인덱스 전까지의 요소들
  const arr2 = feature.slice(버그 + 1);    // 버그 인덱스 이후부터 끝까지, 끝 값은 생략 가능
  return [...arr1, ...arr2];   // return arr1.concat(arr2);
}

solution(["code", "bug", "code"]);
solution(["code", "code"]);