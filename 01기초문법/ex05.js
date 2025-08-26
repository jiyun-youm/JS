//데이터 타입(각 변수들은 암묵적으로 데이터에 대한 종류를 가지고 있습니다)
let name = "홍길동"; //string /문자열은 반드시 ''나 ""를 사용해야함
let age = 24;   //number
let kg=55.23; //number -정수, 실수 상관없음

console.log(name+ "님의 나이는 "+age+"세이고 몸무게는 "+ kg+"kg입니다");

let bool=true; //boolean은 true or false만 가능, 초기화
bool=false; // 수정
console.log("거짓은 영어로 "+ bool);

//null -초기화는 했지만 값이 없을 때 나타남
//code runner에서 document 라는걸 사용할 수 없음
// let x=document.getElementById("이런건 화면에 없어!")
// console.log(x);

//undefined : 초기화를 하지 않은 경우에 나타남
let y;
console.log(y);

//변수의 타입 확인이 필요한 경우에 typeof 키워드로 확인할 수 있습니다
console.log(typeof name);
console.log(typeof age);
console.log(typeof kg);
console.log(typeof bool);
console.log(typeof y);


