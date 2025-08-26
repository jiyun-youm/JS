var a=5;
var b=3;

console.log(a==b);
console.log(a!=b);
console.log(a>=5);
console.log(a<10);
console.log(a<=3);
console.log(a>5);

//js에만 있는 연산자 ===, !==
let x="5";
let y=5;

console.log(x===y);  //f  -3개짜리 연산자를 사용하는 편이 좋다
console.log(x==y);   //t
console.log(x!==y);  //t
console.log(x!=y);   //f

let c;
let d=null;
console.log(c===d);
console.log(c==d);  //둘 다 없다라는 건 같지만 전자는 undifined, 후자는 null로 타입이 다름
