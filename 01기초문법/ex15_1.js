//반복문의 탈출
for(let i=1;i<=10;i++){
    if (i===5) {
        //break;     //5미만까지만 나옴, 중단
        continue;    //5만 안나옴, 건너뛰기
    }
    console.log(i);
    
}
console.log('반복문 종료');
