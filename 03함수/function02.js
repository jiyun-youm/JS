//매개변수 - 함수가 전달받는 변수값
//매개변수는 여러개 일 수도 있습니다
function sayHello(name, age){
    console.log(`안녕하세요. ${name}님. 저는 ${age}세 입니다.`);
    
}

//구구단 수를 매개변수로 전달받아서, 구구단을 출력하는 함수
function gugudan(num){
    for(let i=1;i<=9;i++){
        console.log(`${num}x${i}=${num*i}`);
        
    }
}

sayHello('가',1); //매개변수가 일치하지 않더라도 호출은 됩니다. undefined 라고 뜸. 하지만 매개변수는 정확히 맞춰서 전달하는게 기본입니다. 

gugudan(3); 