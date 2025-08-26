let point=parseInt(Math.random()*100+1)
let grade="불합격";

if (point>=60) {
    grade="합격";    
} else{
    grade="불합격";    
}

console.log("점수:"+point);
console.log(grade);
console.log("------------let 변수의 scope------------"); //scope=범위

if (true){
    let name="홍길동"        //if 구문 바깥에서 name 못씀
}                          //중괄호 스코프-중괄호 안에서 선언된 변수는 중괄호 안에서만 쓸 수 있음
