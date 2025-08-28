//배열에서 사용하는 다양한 함수
//배열의 선언을 new Array()-추천방식은 아님
// let arr=new Array(3); //크기가 3이면서, 비어 있는 배열 생성
// let arr2=new Array(1,2,3); //값을 2개이상 지정하면, 초기값 지정함, [1,2,3]만듦


let arr=[1,2,3,4,5];

arr.push(6);   //배열 끝에 6 추가됨
console.log(arr);
let item =arr.pop();     //배열 끝 요소 제거, 맨 마지막 값을 빼서, 돌려줌->우측에서 좌측으로 반환받을 수 있음/arr에서 pop한거 item에 저장가능함
console.log(arr);
console.log(item);

arr.unshift(100); //배열 맨 앞에 100추가
console.log(arr);
let item2=arr.shift();    //배열 맨 앞 값 제거해서 돌려줌->arr에서 shift한거 변수에 저장가능
console.log(item2);

//arr.splice(1,2);  //첫번째 index에서 2개를 제거한다
arr.splice(1,0,'a','b','c','d','e');  //첫번째 인덱스에서 0개 삭제후 abcde추가
console.log(arr);


//탐색관련 함수
item3=arr.indexOf(4)   //4가 있는 위치를 나한테 반환->변수로 저장할 수 있음/만약 찾는 값 없으면 -1반환
console.log(item3);

if(arr.indexOf('a')!=-1){}  //배열에 a가 있다면

if(arr.includes('a')){}    //a가 있으면 true, 없으면 false

