function solution(a, b) {
    if (b<a) {
        let temp=a;
        a=b;
        b=temp;
    }
    let sum=0;
    for(let i=a;i<=b;i++){
        sum+=i;
    }                     
    return sum;
}

console.log(solution(3,5));
