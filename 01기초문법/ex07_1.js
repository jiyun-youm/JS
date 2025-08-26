//산술연산자
let a = 5 *3;
let b = 5 /3;
let c = 5 %3;

console.log(a,b,c);
console.log(parseInt(b));  //실수->정수로 변경

//전위연산 : ++ : 변수 앞에 붙임//앞에 붙일때랑 뒤에 붙일 때 결과가 다름
let x =5;
let pre=++x;  //++실행 후 pre 에 넣음

console.log("x는", x);
console.log("pre는 ", pre);
//후위연산 : 변수 뒤에 붙임
let y=5;
let post=y++;    //y를 post에 대압하고 나서 ++를 실행함
console.log("y는", y);
console.log("post는", post);

//일반적인 ++,--의 표현은
let num=1;
num++;
num++;
++num;
console.log(num);





