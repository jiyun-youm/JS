//return: 함수가 실행한 결과를 호출구문으로 돌려주는 값

function add(a,b){
    return a+b;
}

let a=add(1, 2);  //리턴을 받아서 저장하는 코드
console.log(a);

//리턴이 있는 함수는 호출문이 실행결과를 돌려받기 때문에, 출력문에 한번에 쓸 수 있음
//리턴이 있는 함수는 함수의 중첩도 가능합니다
let result2=add(add(1,2), add(3,5));
console.log(result2);

//return->돌려주다+함수의 종료
//반드시 양의 정수값만 전달되어야 하는 함수
function some(num){
    if(num<=0){
        return false;           //함수의 종료의 의미로도 사용할 수 있음, return만 쓰면 undefined 반환되기 때문에 boolean 값을 반환하도록 하는게 일반적이다
    }
    return "전달받은 양의 정수는"+num+"입니다"
    console.log("이거 실행됨?");      //return은 함수의 종료가 일어나서  return밑에 있는 코드는 작동이 안됨
    
};

console.log(some(-10));
