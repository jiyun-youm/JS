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
//리스트 내림차순으로 정렬
for(let i=0; i<num_list.length;i++){
    for (let j=i+1;j<num_list.length;j++){
        if(num_list[i]<num_list[j]){
            let temp=num_list[i];
            num_list[i]=num_list[j];
            num_list[j]=temp
        }
    }
}
//리스트 정수로 바꾸기
let answer='';
for(i of num_list){
    answer+=i
}
let s_answer=parseInt(answer);
return s_answer;
}
console.log(solution(118372));


