//자동형변환: 연산 시, 자동으로 타입이 변하게 됨
let num= 10+3.14;
console.log(num);

let text = "10"+3.14 + 5;  //문자열은 가장 강한 타입, 문자열에 더해지면 모두 문자가 된다
console.log(text);

let text2= 3.14+5+"10"; //앞에꺼 두 개 더했을 땐 숫자, 뒤에 10더할땐 문자열로 바뀜
console.log(text2);

let num2="5"*3;  //빼기, 곱하기, 나누기 시에는 숫자로 변경됨
console.log(num2);

//명시적 형변환
//parseInt parseFloat

let result=parseInt("5")+1;
console.log(result);
console.log( parseInt("바꿀 수 없는 값이 들어가면?"));  //NaN : 바꿀 수 없는 값을 바꾼 경우

console.log(parseFloat("3.14")); //실수값으로 변환시에는 paseFloat
console.log(""+5); //숫자를 문자열로 바꿀 경우
 
