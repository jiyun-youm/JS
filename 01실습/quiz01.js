// 어떤 수에서 랜덤한 값을 빼주면 음수값이 나올 수 있습니다. 
//-5에서 5사이의 랜덤한 값을 출력해 줍니다
//이 값이 언제든 절댓값으로 나오도록 3항연산식을 세워보세요

// let ran=parseInt((Math.random()*11)-5);
// let result=(ran>=0?ran:-ran)
// console.log(result);

//1~10까지 랜덤한 수를 생성합니다
//이 숫자가 3의 배수라면 3의 배수입니다, 아니면 3의배수가 아닙니다 를 출력하세요
let ran2=parseInt(Math.random()*10+1)
let result2=(ran2%3==0?"3의 배수입니다":"3의 배수가 아닙니다");
console.log(ran2);

console.log(result2);

  
