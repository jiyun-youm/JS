//전부 for문으로 작성
//구구단 5단 for문 출력
for(let i=1;i<=9;i++){
    console.log(`5x${i}=${5*i}`);
    
}


 
//7~100까지 정수 중에서 7의 배수 출력

let str="";
for(let i=7; i<=100; i++){
    if (i%7===0) {
        str+=i+" ";    //자바스크립트에는 가로로 출력하는 명령문은 없음-->문자열의 합을 활용하여 가로로 출력할 수 있음    
    }
}
console.log(str);




//1에서 50까지 홀수의 합

let sum=0;
for(let i=1; i<=50; i++){
    if (i%2===1) {
        sum+=i;
    }
}
console.log(`1에서 50까지 홀수의 합은${sum}입니다`);



//100의 약수의 합

let sum2=0;
for(let i=1; i<=100;i++){
    if (100%i===0) {
        sum2+=i
    }
}
console.log(`100의 약수의 합은 ${sum2}입니다`);
