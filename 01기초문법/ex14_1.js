// //반복문의 중첩
// for(let i=1; i<=10;i++){
//     console.log(`${i}번째 회전`);
    
//     for(let j=1; j<=9;j++){
//         console.log(`${i}-${j}`);
        
//     }
//     console.log(`${i}번째 회전 끝`);
// }

//2당부터 9단까지 모두 출력
for (let i = 2; i <=9; i++){
    console.log(`===${i}단===`);
    for(let j=1; j<=9;j++){
        console.log(`${i}x${j}=${i*j}`);
           
    }
    console.log();     //이거 하면 한 줄 띄어쓰기됨
    
}