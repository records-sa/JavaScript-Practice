// 야 넌 마춤뻡 하나 못 맞추냐
// 키보드 고장으로 a > q로 잘못 작성됨
// 오타가 있는 문장 str이 주어질 때, 수정할 오타가 있다면 수정된 문장을,오타가 없다면 -1을 return 하기

function solution(str) {
  if(str.includes("q") === false && str.includes("Q" === false)) {
    return -1;
  }

  const 고친문장 = str.replaceAll("q", "a");
  const 고친문장2 = 고친문장.replaceAll("Q", "A");

  return 고친문장2;    // return str.replaceAll("q", "a").replaceAll("Q", "A");
  }
  
  solution("It works, I don't know why.");
  // -1
  solution(
    "Qre you sleeping? Yes, now shut up. I know how to fix thqt bug on line 255."
  );
  // Are you sleeping? Yes, now shut up. I know how to fix that bug on line 255.