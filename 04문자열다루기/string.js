//문자열 다루기 함수

let str='hello world javascript';
//문자열 길이
console.log(`문자열의 길이: ${str.length}`);

//문자열 한글자 자르기
let s1=str.charAt(3);
console.log(`index 3번째 문자열: ${s1}`);

//특정 문자 기준으로 문자열 자르기
let s2=str.split("");
console.log(s2);
let s3=str.split(" ");
console.log(s3);

let s4=str.split("o")
console.log(s4);

//특정 문자의 위치 자르기
let s5=str.substring(6,11);
console.log(`6에서 11사이의 문자열: ${s5}`);  //6이상 11미만 추출

let s6=str.substring(10);       //10미만 문자열 절삭
console.log(s6);

//특정 위치로 문자열 찾기
console.log(str.indexOf('l'));   //l이 처음으로 발견된 위치
console.log(str.indexOf('o',5));   //5번째 위치에서부터 문자열 o 찾기
console.log(str.lastIndexOf('a'));  //문자열 맨 뒤부터 찾기
console.log(str.includes('java'));   //java가 포함되어 있으면 true, 없으면 false
console.log(str.startsWith('hell'));  //hell로 시작하면 true, 아니면 false
console.log(str.endsWith('asdflkj'));  //asdflkj로 끝나면 true, 아니면 false


//문자열 변환
console.log('='.repeat(20));    //문자열 20회 반복
console.log(str.replace("l","헐"));  //첫번째로 발견되는 l->헐으로 변환
console.log(str.replaceAll('l',"헑"));  //모든 l->헑으로 변환


console.log('  hello                 '.trim()); //양측 공백 제거


let text='hello';
console.log(text.toUpperCase());  //전부 대문자
console.log(text.toLowerCase());  //전부 소문자

















