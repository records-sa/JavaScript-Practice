// 취업 사기당한 썰 푼다
// 각 팀의 명단을 담은 객체 team이 주어질 때 “원두”를 개발팀에 추가하기

function solution(team) {
  team.dev.push("원두");   // team["dev"] 도 사용 가능함
  return team;
  }
  
solution({ dev: ["카페", "라떼"] }); 
// {dev: ["카페", "라떼", "원두"]}


// 의심하고 또 의심해
// 각 팀의 명단을 담은 객체 team이 주어질 때 개발팀의 명단을 배열로 return하기

// 내가 푼 코드
function solution(team) {
  if (team === "dev") {
    return team.dev === false ? [] : team.dev;
  } else {
    return -1;
  }
}

// 해설 코드
function solution(team) {
  return team.dev ?? -1;    // return team.dev === undefined ? -1 : team.dev;
}

  
solution({ dev: ["카페", "라떼", "원두"] });
// ["카페", "라떼", "원두"]
solution({ mento: ["은정", "세준", "아라"] });
// -1
solution({ dev: [], operation: ["시윤"] });
// []