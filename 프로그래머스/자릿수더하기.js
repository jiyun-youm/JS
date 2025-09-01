function solution(n)
{
//자릿수 구하기
let a;
for(i=0;n/(10**i)>=1;i++){
    if((n/(10**i))>=1){
        a=i;
    }
}

//더하기
let sum=0;
let num=0;
sum+=parseInt(n/(10**a));
num=n%(10**a)


for(j=a-1;j>=0;j--){
    sum+=parseInt(num/(10**j));
    num=num%(10**j)
}
return sum;
}

console.log(solution(1235));


