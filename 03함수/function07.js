//화살표 함수
//익명함수가 => 화살표 함수로 변경

// let add = function(a,b){
//     return a+b;
// }

// let add2 = (a,b)=>{
//     return a+b;
// }

//규칙1-코드가 한 줄이면 { } 를 생략하고 return을 생략할 수 있음 (자동리턴)
let add= (a,b) =>a+b;
let some=()=>console.log('hello some');
let x=(a)=>a%2==0?"짝수": "홀수"; 

//규칙2-매개변수가 하나일 때 ()생략
let y=a=>a%2==0?"짝수":"홀수";

//규칙3-객체는 { }로 표현되는데, 만약 객체를 반환해야된다면 ( ) 로 묶어줌 
let person=()=>{
    return {name: "홍길동"};
}

console.log('===========================');
//선언적 함수
function myName(name, age){
    return `${name}님의 나이는 ${age}입니다.`;
}

//익명함수
let myName=function(name, age){
    return `${name}님의 나이는 ${age}입니다.`;
}

//화살표함수
let myName2=(name, age)=>`${name}님의 나이는 ${age}입니다.`;

