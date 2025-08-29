/* 
배열의 반복 for문

*/

//합계
let arr=[1,2,3,4,5,6,7];
let sum=0;
for(let i=0; i<arr.length;i++){
    sum+=arr[i];
    
}
console.log(sum);
console.log('=====================');

//배열을 돌리는데 특화된 구문
//for ~in구문
//index를 뽑아줌
for(let i in arr){
    console.log(`인덱스 ${i}, 값 ${arr[i]}`);
    
}


//for ~of구문-ES06 
//값을 뽑아줌

for(let i of arr){
    console.log(i);
    
}