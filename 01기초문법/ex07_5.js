//3항 연산자 : 조건? 참 : 거짓
let age=20;
let result=age>=20 ? "성인입니다" : "미성년자입니다"
console.log("당신은",result);


//프로그램에는 랜덤한 값을 만드는 경우가 필요합니다.
let ran=parseInt(Math.random()*10); //0이상 1미만의 랜덤한 실수값을 만들어줌
console.log(ran);

let r= ran%2===0?"짝수":"홀수"
console.log(r);
