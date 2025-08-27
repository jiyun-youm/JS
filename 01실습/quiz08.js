// //100까지의 수 중에서 3의 배수이면서 4의배수인 수를 출력
let i=1;
while (i<=100) {
    if (i%3===0 && i%4===0) {
        console.log(i);
    }
    i++;
}
                                  
//524의 약수의 개수를 구하시오

let a=1;
let sum1=0
while (a<=524) {
    if (524%a===0) {
        sum1++
    }
    a++
}
console.log(sum1);


// //100까지의 수중에서 9의 배수의 합계

let b=1;
let sum2=0;
while (b<=100) {
    if (b%9===0) {
        sum2+=b;
    }
    b++
}
console.log(sum2);
