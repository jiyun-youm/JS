function solution(n) {
    let num_list=[];
    for(let i=1;i<=n;i++){
        if(n%i===1){
            num_list.push(i)
        }
    }
    num=num_list[0]
    return num
}

console.log(solution(17));