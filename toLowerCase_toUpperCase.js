const str = "Hello world"

// 1. 문자열도 배열처렁 index로 접근할 수 있다.
// str[0]: "H"
// str[2]: "l"

// 2. length, indexOf를 사용할 수 있다.
// str.length: 11
// str.indexOf("e"): 1
// str.indexOf("a"): -1   존재하지 않을 경우

// 3. 대소문자를 변환할 수 있다.
// str.toUpperCase(): "HELLO WORLD"
// str.toLowerCase(): "hello world"



// 아빠가 내 일기장 몰래 훔쳐봤지?!
// 알파벳 어순이 거꾸로 작성된 비밀일기의 문자열 str을 해석하기

// 공백인 경우 그대로 출력
// " " > " "

// 소문자인 경우 어순을 거꾸로한 문자를 찾는다.
// const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
// a > z: ALPHABET[0] > ALPHABET[ALPHABET.lengh-1]
// b > y: ALPHABET[1] > ALPHABET[ALPHABET.lengh-1 - 1]

// 대문자인 경우
// 대문자를 소문자로 바꾼다. toLowerCase()
// 어순을 거꾸로한 문자를 찾는다.
// 찾은 문자를 대문자로 바꾼다. toUpperCase()

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
function solution(str) {
  let 해석일기;

  for(let i = 0; i < str.length; i++){
    if(str[i] === " ") {
      해석일기 = 해석일기 + " ";
      continue;
    }

    const 인덱스 = ALPHABET.indexOf(str[i]);

    if(인덱스 === -1) {
      const 대문자인덱스 = ALPHABET.indexOf(str[i].toLowerCase());
       해석일기 = 해석일기 + ALPHABET[ALPHABET.length-1 - 대문자인덱스].toUpperCase();
    } else {
      해석일기 = 해석일기 + ALPHABET[ALPHABET.length-1 - 인덱스]
    }

  return 해석일기;
  }
}


solution("R dzmg gl vzg ggvlpylppr"); 
// "I want to eat tteokbokki"
solution("Xzgh ziv xfgv"); 
// "Cats are cute"