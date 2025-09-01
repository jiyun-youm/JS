/*
문제 1: 별찍기 (레벨 1)
- 숫자를 받아서 해당 개수만큼 별을 출력하는 함수 printStar를 만들어보세요.
- 반환값이 없는 함수입니다.

문제 2: 현재 시간 출력 (레벨 1)
- 현재 시간을 "현재 시간: [시간]" 형태로 출력하는 함수 showTime를 만들어보세요.
- 현재 시간은 아래 함수로 구할수 있습니다.
let now = new Date();
let hours = now.getHours();      // 시 (0-23)
let minutes = now.getMinutes();  // 분 (0-59)
let seconds = now.getSeconds();  // 초 (0-59)
- 반환값이 없는 함수입니다.

문제 3: 짝수 판별 (레벨 2)
- 숫자를 받아서 짝수인지 홀수인지 판별하는 함수 isEven을 만들어보세요.
- 짝수면 true, 홀수면 false를 반환하세요.

문제 4: 원의 넓이 (레벨 2)
- 반지름을 받아서 원의 넓이를 계산하는 함수 circleArea를 만들어보세요.
- 원의 넓이 = π × 반지름² (π는 3.14159 사용)

문제 5: 약수 개수 (레벨 3)
- 양의 정수를 받아서 약수의 개수를 세는 함수 countDiv를 만들어보세요.
- 예시: 12의 약수는 1, 2, 3, 4, 6, 12이므로 6개

문제 6: 절대값 반환 (레벨 3)
- 숫자를 받아서 절대값을 반환하는 함수 abs를 만들어보세요.
- 예시: abs(-5) → 5, abs(3) → 3

문제 7: 최대값 반환 (레벨 4)
- 세 개의 숫자를 받아서 가장 큰 수를 반환하는 함수 max를 만들어보세요.
- Math.max() 함수는 사용하지 마세요.

문제 8: 완전수 판별 (레벨 5)
- 양의 정수를 받아서 완전수인지 판별하는 함수 isPerfect를 만들어보세요.
- 완전수: 자신을 제외한 약수들의 합이 자신과 같은 수
- 예시: 6의 약수는 1, 2, 3, 6이고, 1+2+3=6이므로 완전수
*/

//문제1
function printStar(num){
    console.log("*".repeat(num));
    
}
printStar(5);

//문제2
function showTime() {
    let now = new Date();
    let hours = now.getHours();      
    let minutes = now.getMinutes();  
    let seconds = now.getSeconds();
    console.log(`현재시간: ${hours}:${minutes}:${seconds}`);
}
showTime()

//문제3
function isEven(num){
    if (num%2==0) {
        return true;
    } else{
        return false;
    }
}
console.log(isEven(17));

//문제4
function circleArea(r){
    return (3.14259*r*r);
}
console.log(circleArea(3));

//문제5
function countDiv(num){
    let cnt=0;
    for(let i=1; i<=num;i++){
        if (num%i==0) {
            cnt++
        }
    }
    return cnt;
}
console.log(countDiv(6));

//문제6
function abs(num){
    if (num<0) {
        num=num*(-1)
    }
    return num;
}
console.log(abs(-2));

//문제7
function max(num1, num2, num3){
    let a=0;
    if (num1>a) {
        a=num1;
    }
    if (num2>a) {
        a=num2;
    }
    if (num3>a) {
        a=num3;
    }
    return a;
}
console.log(max(1,2,7));


//문제8
function isPerfect(num){
    let cnt=0;
    for(let i=1; i<num;i++){
        if (num%i==0) {
            cnt+=i;
        }
    }
    return sum===num;
}
console.log(isPerfect(6));



