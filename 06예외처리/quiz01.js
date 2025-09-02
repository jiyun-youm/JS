/* 
1.registerUser(유저객체) 함수를 생성
2.전달된 유저객체의 name값이 2글자 이하이거나, 비어있으면 예외처리 진행
3.유저객체 안에 name값이 정상값이라면, 유저의 이름을 반환하면 됩니다
*/

let user={name:"",addr:"서울시"};
function registerUser(user){
try {
    if (!user.name || user.name.length <= 2) {
        throw new Error("name 값 오류");
    }
    return user.name
} catch (error) {
        console.log(error.message);
}
}

console.log(registerUser({name:"가나다라마바사",addr:"나"}));



