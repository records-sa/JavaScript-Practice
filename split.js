// 지금 이 순간부터 둘은 하나가 되었습니다
// 나의 이름 name과 성별 sex, 배우자의 이름 spouse가 매개 변수로 주어질 때,
// 이름이 바뀐다면 “결혼 후 당신의 full name은 Calista Ford입니다”를 return 하고,
// 바뀌지 않는다면 “결혼 후 당신의 full name은 바뀌지 않습니다”를 return 하기

// 내가 푼 코드
function solution(name, sex, spouse){
  if(sex === "female") {
    const 바뀐이름 = name.replace(spouse);
    return `결혼 후 당신의 full name은 ${바뀐이름}입니다`
  } else {
    return "결혼 후 당신의 full name은 바뀌지 않습니다"
  }
}

// 해설 코드
function solution(name, sex, spouse) {
  if (sex === "male") return "결혼 후 당신의 full name은 바뀌지 않습니다";
  const firstName = name.split(" ")[0];
  const lastName = spouse.split(" ")[1];
  return `결혼 후 당신의 full name은 ${firstName} ${lastName}입니다`;
}

solution("Harrison Ford", "male", "Calista Flockhart");
// "결혼 후 당신의 full name은 바뀌지 않습니다"
solution("Calista Flockhart", "female", "Harrison Ford");
// "결혼 후 당신의 full name은 Calista Ford입니다"
