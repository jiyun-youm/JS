//var변수의 scope(범위)는 함수입니다->문제가 많음
//let 변수의 scope(범위)는 중괄호 입니다
if(true){
    var x=10;      //전역변수 취급
    let y=20;      //지역변수 취급
}
console.log(x);
//console.log(y);    //에러 뜸

let a='홍길동';      //전역변수-모든 함수나 제어문에서 접근이 가능하다
let some=function() {
    console.log(a);
    let b='이순신';  //지역변수-some 함수 안에서만 접근이 가능
}

console.log(b);  //error
