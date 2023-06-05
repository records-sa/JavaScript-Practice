// siri야 연관 검색어 보여줘
// 사용자가 작성하려고 하는 검색어를 의미하는 문자열 search와 추천해줄 검색어 목록을 의미하는 배열 recommends가 주어질 때 검색어 목록에 전부 해당하는 가장 긴 문자열을 return 하기

// 내가 푼 코드
function solution(search, recommends){
  for(let i = 0; i < recommends.length; i++) {
    for(let j = 0; j < recommends.length[i]; j++) {
      같은문자 = recommends.indexOf(search);
      
      if (같은문자 !== -1) {
        return slice.search(0, 같은문자);
      } else {
        return "";
      }
    }
  }
}

// 해설 코드
function solution(search, recommends){
  for(let i = search.length; i > 0; i--) {
    const 검색어 = search.slice(0, i);
    for(let j = 0; j < recommends.length; j++) {
      const 단어 = recommends[j];
      if(단어.startsWith(검색어) === false) {
        break;
      }
      if(j === recommends.length - 1) {
        return 검색어;
      }
    }
  }
  return "";
}

solution("flutter", ["flower", "flow", "flight"]); // "fl"
solution("apple", ["dad", "racecar", "car"]); // ""