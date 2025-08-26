/* 
변수의 선언방법
var 이름;
*/
var a;
// 초기화
a=1;   //오른쪽에 있는 값을 왼쪽에 넣음 
console.log(a);

// 선언과 초기화 동시에도 가능
var b=10;

console.log(b);
// js는 같은 이름으로 변수를 선언할 수 도 있음. 하지만 지양합니다
// 동일한 이름의 변수는 사용하지 않도록 주의합니다
var b='홍길동';

console.log(b);

// 변수의 값을 변경
a=100;
console.log("변경된 a 값: ",a);

// 변수의 값을 다른 변수에 저장하는 것도 됩니다
var result= a +100;
console.log("result 의 값:", result);

// let 변수-ES6에서 추가된 키워드
// 동일한 변수 선언 불가
// let c=10;
// let c=20

// const: ES6에서 추가된 키워드, 상수(변하지 않는 값)
// 상수는 반드시 값을 선언해야 함
const EARTH_RADIUS=6400;  
// EARTH_RADIUS=7000;  한번 선언되면 값 변경 불가함

console.log(EARTH_RADIUS);
