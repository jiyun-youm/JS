//반복문의 중첩 활용
/* 
*
**
***
****
*****
*/

//바깥 안쪽문:행
//안쪽반복문-별 출력
let result1='';
let star=5;
for(let i=1; i<=star;i++){
    for(let j=1; j<=i;j++){         //반복문의 회전은 바깥회전에 따라서 안쪽회전이 바뀔 수 있음
        result1+="*";        
    }
    result1+='\n'
}
console.log(result1);
console.log('=====================================');
console.log();


let result2='';
let star2=5
for(let i=1; i<=star2;i++){
    for(let j=5; j>=i;j--){        
        result2+="*";        
    } 
    result2+='\n'
}

console.log(result2);