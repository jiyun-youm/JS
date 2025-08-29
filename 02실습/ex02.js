//이 배열의 합계와 평균을 출력해주세요
let number=[10,20,30,40,50];
let sum=0;

for(i of number){           //for(let i=0; i<number.length;i++)
    sum+=i
}
let average=sum/(number.length)
console.log(`합계는 ${sum}, 평균은 ${average}`);



//이 배열에서 최댓값과 최솟값의 찾아서 출력
//변수를 잘 활용해야 함
let score=[85,92,70,96,91,60];
let a=score[0];
let b=score[0];
for (i of score){
    if(i>=a){
        a=i
    }
    if (i<=b) {
        b=i
    }
}
console.log(`최댓값:${a}, 최솟값: ${b}`);


//짝수 필터링
//이 배열에서 짝수만 필터링하여 everNum에 저장하세요 
let numbers=[1,2,3,4,5,6,7,8,9,10];
let everNum=[];

for (i of numbers){
    if (i%2===0) {
        everNum.push(i);
    }
}
console.log(everNum);

console.log('======================');


//배열의 값을 뒤집어서 reverse배열에 저장하시오
let arr=[1,2,3,4,5];
let reverse=[];

for(i of arr){                     //for(let i=arr.length-1;i>=0,i--)
    reverse.unshift(i)
}
console.log(reverse);



//target값이 배열에 포함되어 있으면 해당 인덱스를 출력, 없으면 -1을 출력하세요.
//boolean변수를 이용
let search=['a','b','c','d','e'];
let target='e';
let c=false;  //이거  true말고 false로 하면 밑에 for문에 굳이 else문 안써도 됨
let d;
for(i in search){      //for(let i=0;i<search.length;i++)
   if (target===search[i]) {
         c=true        //찾았는지 안찾았는지 여부
         d=i            //인덱스 기록  
         break;         //값 찾았는데 굳이 계속 돌릴 필요 없음
    }
}

if (c) {
    console.log(d);    
} else{
    console.log(-1);
}




//word배열의 문자열의 길이를 저장하는 wordLength배열을 만들어주세요   //문자열 길이 확인=문자열.length
let word=['apple','banana','melon','grape','orange']
let wordLength=[];

for(i of word){
    wordLength.push(i.length)
}
console.log(wordLength);


