function solution(n) {
    
//자릿수 구하기
let a;
for(i=0;n/(10**i)>=1;i++){
    if((n/(10**i))>=1){
        a=i;
    }
}

//리스트에 넣기
let num_list=[];
let num=0;
num_list.push(parseInt(n/(10**a)))
num=n%(10**a)


for(j=a-1;j>=0;j--){
    num_list.push(parseInt(num/(10**j)))
    num=num%(10**j)
}



}

console.log(solution(124323));
