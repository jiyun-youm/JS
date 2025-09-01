//변수에 함수를 담기



let x=function(){
    console.log("say hello")
};


console.log(x);  //x를 함수처럼 사용 가능해짐

//두 수의 덧셈을 반환하는 익명함수
let add=function(a,b){
    return a+b;
}

console.log(add(1,3));
