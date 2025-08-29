
//학생별 점수의 평균을 구해보세요(중첩)
let students=[
    ["철수", 76,34,23],
    ["정재",30,99,76],
    ['남규',76,87,54],
    ['남수',98,76,45]
]
let a=[];

for(let i=0; i<students.length;i++){ 
    let b=0;
    for(let j=1; j<students[i].length;j++){
        b+=students[i][j]
    }
    c=b/(students[i].length-1)
    console.log(`${students[i][0]}의 평균: ${c.toFixed(1)}점`);
}
 

console.log('========================');

//가장 비싼 상품을 찾아서 출력
let products=[
    ["노트북",1200000],
    ["스마트폰", 800000],
    ["태블릿",500000],+*/
    ["헤드폰",300000],
    ["시계", 2000000]
]
 
let d="";
let b=0;
for(let i=0; i<products.length;i++){
    if (b<products[i][1]) {
        b=products[i][1];
        d=products[i][0]
    }
}
console.log(`가장 비싼 제품-${d}:${b}원`);

