//반복문에서 조건식의 다양성
//어떤 수 x가 소수인지 확인

let x=3982734983
let i=2

while (x%i!==0) {
    
    i++;
}

if (x==i) {
    console.log(`${x}는 소수입니다`);
    
} else{
    console.log(`${x}는 소수가 아닙니다`);
    
}